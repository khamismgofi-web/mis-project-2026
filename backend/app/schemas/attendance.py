from pydantic import BaseModel,EmailStr
from typing import Optional

class attendanceCreate(BaseModel):
    employee_id:int
    date:date

class attendanceResponse(BaseModel):
    id : int
    employee_id:int
    date:date
    
    class config:
        from_attributes = True