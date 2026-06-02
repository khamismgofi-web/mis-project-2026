from fastapi import APIRouter,Depends
from app.services.user import User
from app.schemas import user
from app.models  import user
from app.core.database import get_db
from sqlalchemy.orm import Session
router=APIRouter(
    prefix="/users",
    tags=["Users"]
)




@router.get("/")
async def get_users():
    return {"message": "All users"}


@router.post("/user/")
async def create_user(request:user.User,db:Session=Depends(get_db)):
    user = User(**request.dict())
    return user.create_user(db, user)