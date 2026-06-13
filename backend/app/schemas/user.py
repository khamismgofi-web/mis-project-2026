from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID


class UserRegisterSchema(BaseModel):
    username: str
    email: EmailStr
    password: str


class UserRegister(BaseModel):
    name: Optional[str] = None
    email: EmailStr
    password: str
    phone: Optional[str] = None
    department: Optional[str] = None
    position: Optional[str] = None


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserCreate(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: UUID
    email: EmailStr
    username: Optional[str] = None
    is_active: bool
    is_admin: bool = False

    class Config:
        from_attributes = True
