from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import declarative_base
from app.core.database import Base

from datetime import datetime


Base = declarative_base()


class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, nullable=False, primary_key= True)
    Employee_name = Column(String(100), ForeignKey("Employees.id"), nullable = False)
    position = Column(String(100), ForeignKey("Employees.position"), nullable = False)
    description = Column(String(300), nullable= True)
    created_at = Column(DateTime, default= datetime.utcnow)        