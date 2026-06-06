from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from typing import List
from app.deps import get_db, get_current_user
from app.schemas.department import DepartmentCreate, DepartmentUpdate, DepartmentOut
from app.services import department_service

router = APIRouter(
    prefix="/api/departments",
    tags=["departments"],
    dependencies=[Depends(get_current_user)],
)

@router.get("/", response_model=List[DepartmentOut])
def list_depts(db: Session = Depends(get_db)): return department_service.list_all(db)

@router.get("/{dept_id}", response_model=DepartmentOut)
def get_dept(dept_id: int, db: Session = Depends(get_db)): return department_service.get(db, dept_id)

@router.post("/", response_model=DepartmentOut, status_code=status.HTTP_201_CREATED)
def create_dept(payload: DepartmentCreate, db: Session = Depends(get_db)):
    return department_service.create(db, payload)

@router.put("/{dept_id}", response_model=DepartmentOut)
def update_dept(dept_id: int, payload: DepartmentUpdate, db: Session = Depends(get_db)):
    return department_service.update(db, dept_id, payload)

@router.delete("/{dept_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_dept(dept_id: int, db: Session = Depends(get_db)):
    department_service.delete(db, dept_id)
