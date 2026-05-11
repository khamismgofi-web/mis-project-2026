from pydantic import BaseModel,EmailStr
from typing import Optional
class departmentCreate(BaseModel):
    name: str
    location: Optional[str] = None  


class departmentResponse(BaseModel):
    id: int
    name: str
    location: Optional[str] = None

    class Config:
        orm_mode = True 
        from_attribute = True   