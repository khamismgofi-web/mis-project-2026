import enum

from sqlalchemy import Column, Integer, String
from app.core.database import Base


class USerRole(str,enum.Enum):
    adimn="ADIMN"
    employee="EMPLOYEE"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, nullable=False, primary_key=True)
    username = Column(String(100), unique= True, nullable = False)
    pasword = Column(String(25), nullable = False, unique = True)
    role = Column(String(100), unique = True) 
