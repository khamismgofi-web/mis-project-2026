from sqlalchemy.orm import Mapped,mapped_column,relationship
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class Employee(Base):
    __tablename__="employees"
    id: Mapped[int]=mapped_column(primary_key=True,index=True)
    name:Mapped[str]= mapped_column(String(100))
    department_id:Mapped[int]=mapped_column(ForeignKey("department_id"))
    

    #relationship
department:Mapped["Department"]=relationship(back_populates="employees")
attendances:Mapped[list["Attendance"]]=relationship(back_populates="employee")
    

