from fastapi import APIRouter
from app.schemas.Department import DepartmentCreate, DepartmentResponse

router = APIRouter(
    prefix="/departments",
    tags=["Departments"]
)


@router.get("/")
async def get_departments():
    return {"message": "All departments"}


@router.post("/")
async def create_department():
    return {"message": "Department created"}