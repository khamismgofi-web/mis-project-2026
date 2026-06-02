from fastapi import APIRouter

router = APIRouter(
    prefix="/employees",
    tags=["Employees"]
)


@router.get("/Employee")
def get_employees():
    return {"message": "All employees"}


@router.post("/Employee")
def create_employee():
    return {"message": "Employee created"}
