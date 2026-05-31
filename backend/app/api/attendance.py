from fastapi import APIRouter
from app.schemas.attendance import  attendanceCreate,attendanceResponse


router = APIRouter(
    prefix="/attendance",
    tags=["Attendance"]
)




@router.get("/attendance")
async def get_attendance():

    return {"message": "Attendance records"}


@router.post("/attendance")
async def mark_attendance():
    return {"message": "Attendance marked"}