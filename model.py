from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import declarative_base
from sqlalchemy import ForeignKey

Base = declarative_base()

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True)
    department = Column(String(25))
    report = Column(String(100))


class Department(Base):
    __tablename__ = "department"

    department_name = Column(String, primary_key= True, unique=True)
    head_of_department = Column(String, )
    activity = Column(String(100), nullable=False)