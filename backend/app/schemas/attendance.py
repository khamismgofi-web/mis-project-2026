from datetime import date
from pydantic import BaseModel
from typing import Optional
from app.models import AttendanceStatus
from enum import Enum
class AttendanceCreate(BaseModel):
    employee_id: int
    date: date
    status: AttendanceStatus
    note: Optional[str] = None

class AttendanceOut(AttendanceCreate):
    id: int
    class Config: from_attributes = True

class AttendanceStatus(str, Enum):
    PRESENT = "present"
    ABSENT = "absent"
    LATE = "late"
    EXCUSED = "excused"