from pydantic import BaseModel


class Department(BaseModel):
    id: int
    name: str
    description: str = None

    class config: 
        from_attributes = True