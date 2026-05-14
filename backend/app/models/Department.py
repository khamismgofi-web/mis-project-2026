from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base

class department(Base):
    __tablename__ = "department"
    id:Mapped[int]= mapped_column(primary_key=True)
    name:Mapped[str]=mapped_column(String_(100))

    employees:Mapped[list["Employee"]]=relationship(back_populates="department")
