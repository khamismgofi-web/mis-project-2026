from app.core.database import Base
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String, Float
from sqlalchemy.orm import declarative_base


Base = declarative_base()


class Department(Base):
    __tablename__ = "department"

    department_name = Column(String, primary_key= True, unique=True)
    head_of_department = Column(String, )
    activity = Column(String(100), nullable=False)