from pydantic import BaseModel,EmailStr
from typing import Optional



class DepartmentCreate(BaseModel):
    name:str
    email: EmailStr

class DepartmentResponse(BaseModel):
    id : int
    name: str
    email: EmailStr


    class config:
        from_attributes = True
