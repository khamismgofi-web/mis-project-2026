from sqlalchemy.orm import Mapped,mapped_column,relationship
from sqlalchemy import Column,Interger,Float,ForeignKey,String
from app.core.database import Base

class department(Base):
    __tablename__ = "department"
    id:Mapped[int]= mapped_column(primary_key=True)
    name:Mapped[str]=mapped_column(String(100),nullable=False)

    employees:Mapped[list["Employee"]]=relationship(back_populates="department")
