from sqlalchemy.orm import Mapped,mapped_column,relationship
from sqlalchemy import Column,Interger,String,Float,ForeignKey
from app.core.database import Base


class Report(Base):
    __tablename__="Report"
    id:Mapped[int]=mapped_column(primary_key=True, index=True)
    title:Mapped[str]=mapped_column(String(200),nullable=False)
    desciption:Mapped[str]=mapped_column(ForeignKey("employees.id"))

#relationship
    employee_id:Mapped["Employee"]=relationship(back_populates="reports")