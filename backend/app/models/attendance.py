from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class Employee(Base):
    __tablename__
    id:Mapped[int]=mapped_column(primary_key=True)
    name:Mapped[str]=mapped_column(String(100))
    email:Mapped[str]=mapped_column(String(100))
    department_id:Mapped[int]=mapped_column(ForeignKey("department.id"))
    department:Mapped["Department"]= relationship(back_populates="employees")
    attendances:Mapped[list["Attendance"]]=relationship(back_populates = "employee")
    

