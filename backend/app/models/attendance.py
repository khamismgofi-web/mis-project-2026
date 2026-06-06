from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from app.core.database import Base

class Attendance(Base):
    __tablename__ = "Attendance"

    id = Column(Integer, primary_key=True)
    employee_id = Column(Integer, ForeignKey("Employees.id"), nullable=False)
    date = Column(Date, nullable=False)
    status = Column(String(20))
    check_in = Column(DateTime)
    check_out = Column(DateTime)