from sqlalchemy import Column, String, Date, Enum, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
import enum
from app.database import Base 

class AttendanceStatus(str, enum.Enum):
    present = "present"
    absent = "absent"
    leave = "leave"

class Attendance(Base):
    __tablename__ = "attendances"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    employee_id = Column(UUID(as_uuid=True), ForeignKey("employees.id"), nullable=False)
    date = Column(Date, nullable=False)
    status = Column(Enum(AttendanceStatus), nullable=False)
