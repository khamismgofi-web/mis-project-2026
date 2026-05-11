from pydantic import BaseModel  
from typing import Optional

class AttendanceCreate(BaseModel):  
    employee_id: int
    attendance_date: str
    status: str 


class AttendanceResponse(BaseModel):
    id: int
    employee_id: int
    attendance_date: str
    status: str

    class Config:
        orm_mode = True 
        from_attribute = True   