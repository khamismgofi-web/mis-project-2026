from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models import Employee
from app.schemas.employee import EmployeeCreate, EmployeeUpdate

def list_all(db: Session):
    return db.query(Employee).all()

def get(db: Session, emp_id: int) -> Employee:
    e = db.get(Employee, emp_id)
    if not e:
        raise HTTPException(status_code=404, detail="Employee not found")
    return e

def create(db: Session, payload: EmployeeCreate) -> Employee:
    if db.query(Employee).filter(Employee.email == payload.email).first():
        raise HTTPException(status_code=400, detail="Email already exists")
    e = Employee(**payload.model_dump())
    db.add(e)
    db.commit()
    db.refresh(e)
    return e

def update(db: Session, emp_id: int, payload: EmployeeUpdate) -> Employee:
    e = get(db, emp_id)
    for k, v in payload.model_dump(exclude_unset=True).items():
        setattr(e, k, v)
    db.commit()
    db.refresh(e)
    return e

def delete(db: Session, emp_id: int):
    e = get(db, emp_id)
    db.delete(e)
    db.commit()
