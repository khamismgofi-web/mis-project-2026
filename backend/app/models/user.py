from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Integer,String,Float,ForeignKey,UUID,Boolean,DateTime,func
from app.core.database import Base


class USerRole(Base):
    __tablename__ = "user_roles"
    id: Mapped[uuid.UUID] = mapped_column(UUID, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
                                      
class User(Base):
    __tablename__ = "users"

    id:Mapped[uuid.UUID] = mapped_column(UUID,primary_key=True,index=True)
    email:Mapped[str]= mapped_column(String(200),unique=True,nullable=False,index=True)
    password_hash:Mapped[str] = mapped_column(String(120),nullable=False)
    is_active:Mapped[bool] = mapped_column(Boolean,default=True)
    created_at:Mapped[str] = mapped_column(DateTime(timezone=True),server_default=func.now())
