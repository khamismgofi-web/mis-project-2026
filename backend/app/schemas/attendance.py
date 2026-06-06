from pydantic import BaseModel,EmailStr
from typing import Optional
from typing import Optional
from datetime import date

class attendanceCreate(BaseModel):
    employee_id:int
    date:date

class attendanceResponse(BaseModel):
    id : int
    employee_id:int
    date:date

    class config:
        from_attributes = True
