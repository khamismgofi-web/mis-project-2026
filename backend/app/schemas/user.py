from pydantic import BaseModel,EmailStr
from typing import Optional

class UserCreate(BaseModel):
    name:str
    email:EmailStr
    hash_password:str

class UserResponse(BaseModel):
    id:int
    name:str
    email:EmailStr


    class config:
        from_attributes=True