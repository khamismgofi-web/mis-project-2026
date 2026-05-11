from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class Employee(Base):
    __tablename__ = "employees"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String)
    department_id: Mapped[int] = mapped_column(Integer, ForeignKey("departments.id"))
    position: Mapped[str] = mapped_column(String)
    salary: Mapped[float] = mapped_column(Float)
    attendance_id: Mapped[int] = mapped_column(Integer, ForeignKey("attendances.id"))