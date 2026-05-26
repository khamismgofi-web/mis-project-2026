from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base
class user(Base):
    __tablename__="user"
    id:Mapped[int]=mapped_column(primary_key=True,index=True)
    name:Mapped[str]=mapped_column(String(100),unique=True,nullable=False)
    email:Mapped[str]=mapped_column(String(150),unique=True, nullable=False)
    password:Mapped[str]=mapped_column(String(255),nullable=False)