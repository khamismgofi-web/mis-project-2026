from datetime import date
from pydantic import BaseModel
from typing import Optional
from enum import Enum


class AttendanceStatus(str, Enum):
    PRESENT = "present"
    ABSENT = "absent"
    LATE = "late"
    EXCUSED = "excused"


class attendanceCreate(BaseModel):
    employee_id: int
    date: date
    status: AttendanceStatus = AttendanceStatus.PRESENT
    note: Optional[str] = None


class attendanceResponse(BaseModel):
    id: int
    employee_id: int
    date: date
    status: AttendanceStatus
    note: Optional[str] = None

    class Config:
        from_attributes = True


class AttendanceCreate(attendanceCreate):
    pass


class AttendanceOut(attendanceResponse):
    pass