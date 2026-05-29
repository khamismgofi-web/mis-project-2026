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


class Department(Base):
    __tablename__ = "Department"

    
    name = Column(String, primary_key= True, unique=True)
    head_of_department = Column(String, )
    activity = Column(String(100), nullable=False)

class Attendance(Base):
    __tablename__ = "Attendance"

    id = Column(String(50), primary_key= True)
    Employee_name = Column(String(80), ForeignKey("Employees.id"), nullable = False)
    date = Column(Date, nullable = False)
    status = Column(String(100))
    check_in = Column(DateTime)
    check_out = Column(DateTime)

class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, nullable=False, primary_key= True)
    Employee_name = Column(String(100), ForeignKey("Employees.id"), nullable = False)
    position = Column(String(100), ForeignKey("Employees.position"), nullable = False)
    description = Column(String(300), nullable= True)
    created_at = Column(DateTime, default= datetime.utcnow)

class user(Base):
    __tablename__ = "users"

    id = Column(Integer, nullable=False, primary_key=True)
    username = Column(String(100), unique= True, nullable = False)
    pasword = Column(String(25), nullable = False, unique = True)
    role = Column(String(100), unique = True) 

