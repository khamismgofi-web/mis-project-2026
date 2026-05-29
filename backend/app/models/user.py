from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Interger,String,Float,ForeignKey,uuid
from app.core.database import Base
import uuid

class USerRole(str,enum.Enum):
    adimn="ADIMN"
    employee="EMPLOYEE"

class User(Base):
    __tablename__="users"

    id:Mapped[uuid.UUID] = mapped_column(Interger,primary_key=True,index=True)
    email:Mapped[str]= mapped_column(String(200),unique=True,nullable=False,index=True)
    password_hash:Mapped[str] = mapped_column(String(120),nullable=False)
    is_active:Mapped[bool] = mapped_column(Boolean,default=True)
    created_at:Mapped[str] = mapped_column(DateTime(timezone=True),server_default=func.now())
