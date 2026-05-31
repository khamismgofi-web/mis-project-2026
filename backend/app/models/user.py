from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String, uuid
from sqlalchemy.orm import declarative_base
from datetime import datetime
from app.core.database import Base
import uuid

Base = declarative_base()

class USerRole(str,enum.Enum):
    adimn="ADIMN"
    employee="EMPLOYEE"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, nullable=False, primary_key=True)
    username = Column(String(100), unique= True, nullable = False)
    pasword = Column(String(25), nullable = False, unique = True)
    role = Column(String(100), unique = True) 
