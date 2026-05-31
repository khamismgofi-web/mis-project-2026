from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import declarative_base
from app.core.database import Base
from datetime import datetime


Base = declarative_base()

class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer, ForeignKey("employees.id"))

    date = Column(Date, nullable= False)
    status = Column(String(20))
    check_in = Column(DateTime)
    check_out = Column(DateTime)