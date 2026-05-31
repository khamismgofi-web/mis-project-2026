from app.core.database import Base
from sqlalchemy import Column, String


class Department(Base):
    __tablename__ = "Department"

    name = Column(String, primary_key=True, unique=True)
    head_of_department = Column(String)
    activity = Column(String(100), nullable=False)
