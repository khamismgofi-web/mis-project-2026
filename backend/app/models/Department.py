from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Integer, String, ForeignKey
from app.core.database import Base

class Department(Base):
    __tablename__ = "departments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    positions: Mapped[str] = mapped_column(String, nullable=False)

    department_id: Mapped[int] = mapped_column(Integer, ForeignKey("employees.department_id"))  
    

