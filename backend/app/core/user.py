from pydantic import BaseModel

class Employee(BaseModel):

    id: int
    name: str
    email: str
    department_id: int

    class config:
        from_attributes = True