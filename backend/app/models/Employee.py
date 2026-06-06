from sqlalchemy.orm import Mapped,mapped_column, relationship
from sqlalchemy import Column,Integer,String,Float,ForeignKey
from app.core.database import Base

# app/models/employee.py



class Employee(Base):
    __tablename__ = "employees"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    user_id: Mapped[int] = mapped_column(nullable=False)

    department_id: Mapped[int] = mapped_column(
        ForeignKey("departments.id"),
        nullable=False
    )

    position: Mapped[str] = mapped_column(String(100), nullable=False)

    salary: Mapped[float] = mapped_column(Float, nullable=False)

    department = relationship("Department", back_populates="employees")

    attendances = relationship("Attendance", back_populates="employee")

    reports = relationship("Report", back_populates="creator")
