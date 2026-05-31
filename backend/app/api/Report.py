from fastapi import APIRouter
from app.schemas.Report import*

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.get("/")
async def get_reports():
    return {"message": "All reports"}