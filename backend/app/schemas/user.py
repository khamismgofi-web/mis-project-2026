from pydantic import BaseModel,EmailStr
from typing import Optional

class UserCreate(BaseModel):
    name:str
    email:EmailStr
    password:str

class UserResponse(BaseModel):
    id:int
    name:set
    email:EmailStr


    class config:
        from_attributes=True