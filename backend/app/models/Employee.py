from app.core.database import Base
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import declarative_base

from datetime import datetime


Base = declarative_base()

class Employee(Base):
    __tablename__ = "Employees"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True)
    position = Column(String(25))
    salary = Column(Integer)
    department_name = Column(String, ForeignKey("Department.name"))
