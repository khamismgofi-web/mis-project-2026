from fastapi import FastAPI
from app.models.employee import Employee
from app.models.user import User
from fastapi.security import APIKeyHeader
from app.database import Base, engine

try:
    from app.models import employee, attendance, user
except ImportError:
    from app.models.employee import Employee
    from app.models.user import User
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Management Information System API")

oauth2_scheme = APIKeyHeader(name="Authorization", auto_error=False)

from app.api.auth import router as auth_router
from app.api.employees import router as employees_router

app.include_router(auth_router, prefix="/auth")
app.include_router(employees_router, prefix="/employees")

@app.get("/")
def read_root():
    return {"message": "Welcome to MIS API"}