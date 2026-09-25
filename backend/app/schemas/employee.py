from datetime import date
from pydantic import BaseModel, EmailStr
from typing import Optional

class EmployeeBase(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    position: Optional[str] = None
    salary: float = 0.0
    hired_at: date
    department_id: int

class EmployeeCreate(EmployeeBase): pass
class EmployeeUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    position: Optional[str] = None
    salary: Optional[float] = None
    hired_at: Optional[date] = None
    department_id: Optional[int] = None

class EmployeeOut(EmployeeBase):
    id: int
    class Config: from_attributes = True
