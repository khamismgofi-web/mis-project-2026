from datetime import date
from sqlalchemy import Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

class Employee(Base):
    __tablename__ = "employees"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    email: Mapped[str] = mapped_column(String, unique=True, index=True, nullable=False)
    phone: Mapped[str] = mapped_column(String, nullable=True)
    position: Mapped[str] = mapped_column(String, nullable=True)
    salary: Mapped[float] = mapped_column(Float, default=0.0)
    hired_at: Mapped[date] = mapped_column(Date, default=date.today)
    department_id: Mapped[int] = mapped_column(ForeignKey("departments.id"), nullable=True)

    department = relationship("Department", back_populates="employees")
    attendance = relationship("Attendance", back_populates="employee", cascade="all, delete-orphan")
