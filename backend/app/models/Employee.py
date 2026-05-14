from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class Employee(Base):
    __tablename__="employees"
    id: Mapped[int]=mapped_column(primary_key=True,index=True)
    name:Mapped[str]= mapped_column(string(100))
    department_id:Mapped[int]=mapped_column(ForeignKey("department_id"))
    

    #relationship
    department:Mapped["department"]=relationship(back_populates="employees")
    attendances:Mapped[list["Attendance"]]=relation(back_populates="employee")
    

