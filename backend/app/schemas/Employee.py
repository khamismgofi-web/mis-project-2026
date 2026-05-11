from pydantic import BaseModel,EmailStr
from typing import Optional
 

class employeeCreate(BaseModel):
        name: str
        department_id: int
        position: str
        salary: float
        attendance_id: int 
        
        
 class employeeResponse(BaseModel):  
    id: int
    name: str
    department_id: int
    position: str
    salary: float
    attendance_id: int 

    class Config:
        orm_mode = True 
        from_attribute = True   