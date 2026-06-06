from pydantic import BaseModel,EmailStr
from typing import Optional
from typing import Optional

class Report_Create(BaseModel):
    title:str
    description:str

class ReportResponse(BaseModel):
    id : int
    title: str
    description:str


    class config:
        from_attributes=True
