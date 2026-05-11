from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class Report(Base):
    __tablename__ = "reports"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    employee_id: Mapped[int] = mapped_column(Integer, ForeignKey("employees.id"))
    department_id: Mapped[int] = mapped_column(Integer, ForeignKey("departments.id"))
    attendance_id: Mapped[int] = mapped_column(Integer, ForeignKey("attendances.id"))
    report_date: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(String)    
    title = column(String, nullable=False )
    

