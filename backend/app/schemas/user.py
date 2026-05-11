from pydantic import BaseModel,EmailStr
from typing import Optional

class UserCreate(BaseModel):
        email: EmailStr
        password: str
        full_name: Optional[str] = None


        class userResponse(BaseModel):
            id: int
            email: EmailStr
            full_name: Optional[str] = None

            class Config:
                orm_mode = True
                from_attribute = True