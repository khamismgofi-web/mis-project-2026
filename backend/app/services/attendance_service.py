from sqlalchemy.orm import Session
from app.models import Attendance
from app.schemas.attendance import AttendanceCreate

def mark(db: Session, payload: AttendanceCreate) -> Attendance:
    existing = db.query(Attendance).filter(
        Attendance.employee_id == payload.employee_id,
        Attendance.date == payload.date,
    ).first()
    if existing:
        existing.status = payload.status
        existing.note = payload.note
        db.commit(); db.refresh(existing); return existing
    a = Attendance(**payload.model_dump())
    db.add(a); db.commit(); db.refresh(a); return a

def list_by_date(db: Session, target_date):
    return db.query(Attendance).filter(Attendance.date == target_date).all()

def list_by_employee(db: Session, employee_id: int):
    return db.query(Attendance).filter(Attendance.employee_id == employee_id).all()
