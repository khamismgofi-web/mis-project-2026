from sqlalchemy.orm import Mapped,mapped_column,relationship
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class Attendance(Base):
    __tablename__="Attendance"
    id:Mapped[int]=mapped_column(primary_key=True)
    name:Mapped[str]=mapped_column(String(100),nullable=False)
    email:Mapped[str]=mapped_column(String(100),nullable=False)
    department_id:Mapped[int]=mapped_column(ForeignKey("department.id"))
#Relationship
department:Mapped["Department"]= relationship(back_populates="employees")
attendances:Mapped[list["Attendance"]]=relationship(back_populates = "employee")
    

