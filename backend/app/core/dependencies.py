from typing import Generator

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from app.core.config import SECRET_KEY, ALGORITHM
from app.core.database import SessionLocal
from app.core.security import decode_access_token
from app.core.exceptions import (UserNotFoundException,
                                InvalidCredentialsException,
                                InvalidTokenException,
                                AdminAccessRequiredException,
                                AccountDisabledException,
                                RoleNotAssignedException,
                                PermissionDeniedException,
                                AuthenticationException,
                                TokenExpiredException,
                                ForbiddenException

)
from app.models.user import User


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):

    try:
        payload = jwt.decode(token, SECRET_KEY,algorithms=[ALGORITHM])
        user_id: payload.get("sub")
        if user_id is None:
            raise AuthenticationException
    except JWTError:
        raise InvalidTokenException

    user = db.query(User).filter(User.id == int(user_id)).first()
    if user is None:
        raise AuthenticationException
    return user


def required_admin(current_user: User = Depends(get_current_user)):
    if current_user.role != "admin":
        raise AdminAccessRequiredException()
    return current_user

def required_user(current_user:User = Depends(get_current_user)):
    return current_user