from pydantic import BaseModel,EmailStr

class Attendance(BaseModel):
    id: int
    employee_id: int
    date: str

    class config:
        from_attributes = True