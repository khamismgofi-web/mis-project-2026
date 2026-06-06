from pydantic import BaseModel,EmailStr
from typing import Optional

class EmployeeCreate(BaseModel):
    name:str
    position: str
    department_id:int
    salary:float

class EmployeeResponse(BaseModel):
    id : int
    name: str
    position:str
    department_id:int


    class config:
        from_attributes=True
