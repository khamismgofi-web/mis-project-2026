from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Integer,String,Float,ForeignKey, DateTime
from app.core.database import Base
from datetime import datetime
from sqlalchemy.orm import relationship



class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, nullable=False, primary_key= True)
    employee_id = Column(Integer, ForeignKey("Employees.id"), nullable=False)
    position = Column(String(25), nullable=False)
    description = Column(String(300), nullable= True)
    created_at = Column(DateTime, default= datetime.utcnow)        
