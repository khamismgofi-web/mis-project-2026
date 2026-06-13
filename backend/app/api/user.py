from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.services.user import get_all_users, create_user as svc_create_user
from app.schemas.user import UserRegisterSchema, UserResponse
from app.core.database import get_db

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


@router.get("/", response_model=list[UserResponse])
def list_users(db: Session = Depends(get_db)):
    return get_all_users(db)


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_user_endpoint(request: UserRegisterSchema, db: Session = Depends(get_db)):
    new_user = svc_create_user(db, request)
    return new_user