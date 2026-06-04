from sqlalchemy.orm import Session

from app.models.Employee import Employee
from app.core.Employee import EmployeeCreate


def get_all_employees(db: Session):
    return db.query(Employee).all()


def get_employee_by_id(db: Session, employee_id: int):
    return db.query(Employee).filter(
        Employee.id == employee_id
    ).first()


def create_employee(db: Session, employee: EmployeeCreate):
    new_employee = Employee(
        first_name=employee.first_name,
        last_name=employee.last_name,
        email=employee.email,
        phone=employee.phone,
        department_id=employee.department_id,
        hire_date=employee.hire_date
    )

    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)

    return new_employee


def update_employee(db: Session, employee_id: int, employee: EmployeeCreate):
    existing_employee = get_employee_by_id(db, employee_id)

    if not existing_employee:
        return None

    existing_employee.first_name = employee.first_name
    existing_employee.last_name = employee.last_name
    existing_employee.email = employee.email
    existing_employee.phone = employee.phone
    existing_employee.department_id = employee.department_id
    existing_employee.hire_date = employee.hire_date

    db.commit()
    db.refresh(existing_employee)

    return existing_employee


def delete_employee(db: Session, employee_id: int):
    employee = get_employee_by_id(db, employee_id)

    if employee:
        db.delete(employee)
        db.commit()

    return employee