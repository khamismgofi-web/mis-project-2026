from sqlalchemy.orm import Mapped,mapped_column, relationship
from sqlalchemy import Column,Integer,String,Float,ForeignKey,  Date,Text
from app.core.database import Base




# app/models/attendance.py


class Attendance(Base):
    __tablename__ = "attendances"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    employee_id: Mapped[int] = mapped_column(
        ForeignKey("employees.id"),
        nullable=False
    )


    status: Mapped[str] = mapped_column(String(50), nullable=False)

    employee = relationship("Employee", back_populates="attendances")