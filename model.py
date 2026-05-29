from sqlalchemy import Column, String, Integer,  ForeignKey
from sqlalchemy.orm import declarative_base, relationship

from date import datetime


Base = declarative_base()

class Employee(Base):
    __tablename__ = "Employees"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True)
    position = Column(String(25))
    salary = Column(Integer)
    department_name = Column(Integer, ForeignKey("department.name"))


class Department(Base):
    __tablename__ = "Department"

    
    name = Column(String, primary_key= True, unique=True)
    head_of_department = Column(String, )
    activity = Column(String(100), nullable=False)

class Attendance(Base):
    __tablename__ = "Attendance"

    id = Column(String(50), primary_key= True)
    Employee_name = Column(String(80),ForeignKey = "Employee.id", nullable = False)
    date = Column(Date, nullable = False)
    status = Column(String(100))
    check_in = Column(Datetime)
    check_out = Column(Datetime)

class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, nullable=False, primary_key= True)
    Employee_name = Column(String(100), nullable = False, ForeignKey = "employee.id")
    position = Column (String(100), nullable = False, ForeignKey = "Employee.position")
    description = Column(String(300), nullable= True)
    created_at = Column(Datetime, default= datetime.utcnow)

class user(Base):
    __tablename__ = "users"

    id = Column(Integer, nullable=False, primary_key=True)
    username = Column(String(100), unique= True, nullable = False)
    pasword = Column(String(25), nullable = False, unique = True)
    role = column(sring(100), unique = True)

