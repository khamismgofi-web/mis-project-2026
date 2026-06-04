from sqlalchemy.orm import Session

from app.models.Department import Department
from app.core.Department import DepartmentCreate


def get_all_departments(db: Session):
    return db.query(Department).all()


def get_department_by_id(db: Session, department_id: int):
    return db.query(Department).filter(
        Department.id == department_id
    ).first()


def create_department(db: Session, department: DepartmentCreate):
    new_department = Department(
        name=department.name
    )

    db.add(new_department)
    db.commit()
    db.refresh(new_department)

    return new_department


def delete_department(db: Session, department_id: int):
    department = get_department_by_id(db, department_id)

    if department:
        db.delete(department)
        db.commit()

    return department