from pydantic import BaseModel,EmailStr
from typing import Optional

class DepartmentCreate(BaseModel):
    name:str


class DepartmentResponse(BaseModel):
    id : int
    name: str

    class config:
        from_attributes = True