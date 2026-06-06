from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models import Department
from app.schemas.department import DepartmentCreate, DepartmentUpdate

def list_all(db: Session): return db.query(Department).all()

def get(db: Session, dept_id: int) -> Department:
    d = db.query(Department).get(dept_id)
    if not d: raise HTTPException(status_code=404, detail="Department not found")
    return d

def create(db: Session, payload: DepartmentCreate) -> Department:
    d = Department(**payload.model_dump())
    db.add(d); db.commit(); db.refresh(d); return d

def update(db: Session, dept_id: int, payload: DepartmentUpdate) -> Department:
    d = get(db, dept_id)
    for k, v in payload.model_dump(exclude_unset=True).items(): setattr(d, k, v)
    db.commit(); db.refresh(d); return d

def delete(db: Session, dept_id: int):
    d = get(db, dept_id); db.delete(d); db.commit()
