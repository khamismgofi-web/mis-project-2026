from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from typing import List
from app.deps import get_db, get_current_user
from app.schemas.employee import EmployeeCreate, EmployeeUpdate, EmployeeOut
from app.services import employee_service

router = APIRouter(
    dependencies=[Depends(get_current_user)],
)

@router.get("/", response_model=List[EmployeeOut])
def list_all_employees(db: Session = Depends(get_db)):
    return employee_service.list_all(db)

@router.get("/{id}", response_model=EmployeeOut)
def get_single_employee(id: int, db: Session = Depends(get_db)):
    return employee_service.get(db, id)

@router.post("/", response_model=EmployeeOut, status_code=status.HTTP_201_CREATED)
def create_new_employee(payload: EmployeeCreate, db: Session = Depends(get_db)):
    return employee_service.create(db, payload)

@router.put("/{id}", response_model=EmployeeOut)
def update_employee(id: int, payload: EmployeeUpdate, db: Session = Depends(get_db)):
    return employee_service.update(db, id, payload)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_employee(id: int, db: Session = Depends(get_db)):
    employee_service.delete(db, id)
