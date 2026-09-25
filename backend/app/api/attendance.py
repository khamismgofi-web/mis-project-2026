from datetime import date
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.deps import get_db, get_current_user
from app.schemas.attendance import AttendanceCreate, AttendanceOut
from app.services import attendance_service

router = APIRouter(
    prefix="/api/attendance",
    tags=["attendance"],
    dependencies=[Depends(get_current_user)],
)

@router.post("/", response_model=AttendanceOut)
def mark(payload: AttendanceCreate, db: Session = Depends(get_db)):
    return attendance_service.mark(db, payload)

@router.get("/by-date/{target}", response_model=List[AttendanceOut])
def list_by_date(target: date, db: Session = Depends(get_db)):
    return attendance_service.list_by_date(db, target)

@router.get("/by-employee/{employee_id}", response_model=List[AttendanceOut])
def list_by_employee(employee_id: int, db: Session = Depends(get_db)):
    return attendance_service.list_by_employee(db, employee_id)
