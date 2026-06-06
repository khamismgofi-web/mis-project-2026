from sqlalchemy import Integer, String, Float, Date
from sqlalchemy.orm import Mapped, mapped_column
from app.database import Base 

class Employee(Base):
    __tablename__ = "employees"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String, nullable=False) 
    email: Mapped[str] = mapped_column(String, unique=True, index=True, nullable=False)
    phone: Mapped[str] = mapped_column(String, nullable=True)
    position: Mapped[str] = mapped_column(String, nullable=True)
    salary: Mapped[float] = mapped_column(Float, nullable=True)
    hired_at: Mapped[str] = mapped_column(String, nullable=True)
    department_id: Mapped[int] = mapped_column(Integer, nullable=True)