from sqlalchemy.orm import Mapped,mapped_column, relationship
from sqlalchemy import Column,Integer,String,Float,ForeignKey
from  app.core.database import Base

# app/models/department.py



class Department(Base):
    __tablename__ = "departments"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    description: Mapped[str] = mapped_column(String(200), nullable=True)
    employees = relationship("Employee", back_populates="department")
