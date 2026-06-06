from sqlalchemy.orm import Session

from app.models.attendance import Attendance
from app.core.attendance import AttendanceCreate


def get_all_attendance(db: Session):
    return db.query(Attendance).all()


def get_attendance_by_id(db: Session, attendance_id: int):
    return db.query(Attendance).filter(
        Attendance.id == attendance_id
    ).first()


def mark_attendance(db: Session, attendance: AttendanceCreate):
    new_attendance = Attendance(
        employee_id=attendance.employee_id,
        date=attendance.date,
        status=attendance.status
    )

    db.add(new_attendance)
    db.commit()
    db.refresh(new_attendance)

    return new_attendance


def delete_attendance(db: Session, attendance_id: int):
    attendance = get_attendance_by_id(db, attendance_id)

    if attendance:
        db.delete(attendance)
        db.commit()

    return attendance