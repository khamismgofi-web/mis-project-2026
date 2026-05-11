from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class Attendance(Base):
    __tablename__ = "attendances"
    id: Mapped[int] = mapped_column(Intreger, primary_key=True, index=True)
    employee_id: Mapped[int] = mapped_column(Integer, ForeignKey("employees.id"))
    attendance_date: Mapped[str] = mapped_column(String)
    status: Mapped[str] = mapped_column(String)
