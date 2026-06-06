from datetime import datetime
from pydantic import BaseModel
from typing import Optional

class DepartmentBase(BaseModel):
    name: str
    manager: Optional[str] = None

class DepartmentCreate(DepartmentBase): pass
class DepartmentUpdate(DepartmentBase): pass

class DepartmentOut(DepartmentBase):
    id: int
    created_at: datetime
    class Config: from_attributes = True
