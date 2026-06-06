from fastapi import APIRouter, Depends, HTTPException, status, Form
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from pydantic import SecretStr
from app.deps import get_db
from app.schemas.auth import TokenResponse
from app.services import auth_service

router = APIRouter(prefix="/api/auth", tags=["Auth"])

@router.post("/register", response_model=TokenResponse)
def register(
    username: str = Form(...),
    email: str = Form(...),
    password: SecretStr = Form(...), 
    db: Session = Depends(get_db)
):
    auth_service.register(db, username, email, password.get_secret_value())
    token = auth_service.authenticate(db, username, password.get_secret_value())
    return TokenResponse(access_token=token)

@router.post("/login", response_model=TokenResponse)
def login(
    username:str =Form(...), 
    password: SecretStr = Form(...), 
    db: Session = Depends(get_db)
):
    token = auth_service.authenticate(db, username, password.get_secret_value())
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return TokenResponse(access_token=token)