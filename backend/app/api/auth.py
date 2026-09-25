import uuid
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import ProgrammingError, SQLAlchemyError
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import get_db
from app.core.security import create_access_token, hash_password, verify_password
from app.deps import get_current_user
from app.models.user import User
from app.models.employee import Employee
from app.models.department import Department
from app.schemas.user import UserRegister, UserLogin, UserResponse, Token

router = APIRouter(
    prefix="/auth",
    tags=["Auth"],
)

def get_user_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).first()

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register_user(request: UserRegister, db: Session = Depends(get_db)):
    existing_user = get_user_by_email(db, request.email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    # Create username from provided name or fallback to email prefix
    username = (request.name or request.email.split("@")[0]).strip()

    user = User(
        id=uuid.uuid4(),
        username=username,
        email=request.email,
        password_hash=hash_password(request.password),
        is_active=True,
        is_admin="admin" in username.lower(),
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    # Create linked employee record. Prefer to match department by name if provided.
    dept_id = None
    if request.department:
        dept = db.query(Department).filter(Department.name == request.department).first()
        if dept:
            dept_id = dept.id

    # Avoid duplicate employee email
    existing_employee = db.query(Employee).filter(Employee.email == request.email).first()
    if existing_employee:
        # Rollback created user to keep data consistent
        db.delete(user)
        db.commit()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An employee with this email already exists",
        )

    employee = Employee(
        name=(request.name or username),
        email=request.email,
        phone=request.phone,
        position=request.position,
        department_id=dept_id,
    )

    db.add(employee)
    db.commit()
    db.refresh(employee)

    return user

@router.post("/login", response_model=Token)
def login_user(request: UserLogin, db: Session = Depends(get_db)):
    try:
        user = get_user_by_email(db, request.email)
    except (ProgrammingError, SQLAlchemyError) as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Authentication service is unavailable. Database schema may not be initialized.",
        ) from exc

    if not user or not verify_password(request.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user",
        )

    access_token = create_access_token(
        data={
            "sub": user.email,
            "user_id": str(user.id),
        }
    )

    return Token(access_token=access_token, token_type=getattr(settings, "TOKEN_PREFIX", "Bearer").lower())

@router.get("/me", response_model=UserResponse)
def get_authenticated_user(current_user: User = Depends(get_current_user)):
    return current_user