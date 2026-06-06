from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.deps import get_db, get_current_user
from app.models import Employee, Department, Attendance

router = APIRouter(
    prefix="/api/reports",
    tags=["reports"],
    dependencies=[Depends(get_current_user)],
)

@router.get("/headcount-by-department")
def headcount(db: Session = Depends(get_db)):
    rows = db.query(
        Department.name,
        func.count(Employee.id).label("staff"),
        func.coalesce(func.sum(Employee.salary), 0).label("payroll"),
    ).outerjoin(Employee).group_by(Department.id).all()
    return [{"department": r[0], "staff": r[1], "payroll": float(r[2])} for r in rows]

@router.get("/attendance-summary")
def attendance_summary(db: Session = Depends(get_db)):
    rows = db.query(Attendance.status, func.count(Attendance.id)).group_by(Attendance.status).all()
    return [{"status": r[0].value, "count": r[1]} for r in rows]
