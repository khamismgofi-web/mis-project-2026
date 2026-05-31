from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Column,Integer,String,Float,ForeignKey, DateTime
from app.core.database import Base
from datetime import datetime
from sqlalchemy.orm import relationship



class Report(Base):
    __tablename__ = "reports"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    title: Mapped[str] = mapped_column(String(255), nullable=False)

    created_by: Mapped[int] = mapped_column(
        ForeignKey("employees.id"),
        nullable=False
    )

    created_at: Mapped[DateTime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    creator = relationship("Employee", back_populates="reports")