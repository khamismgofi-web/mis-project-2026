from fastapi import FastAPI 
from app.api import attendance, Report, user, Department, Employee, auth

app = FastAPI(
    title="Management Information System API",
    description="API for the Management Information System (MIS) project",
    version="1.0.0"
)

app.include_router(auth.router)
app.include_router(user.router, prefix="/users", tags=["users"])
app.include_router(attendance.router, prefix="/attendance", tags=["attendance"])
app.include_router(Report.router, prefix="/reports", tags=["reports"])
app.include_router(Department.router, prefix="/departments", tags=["departments"])
app.include_router(Employee.router, prefix="/employees", tags=["employees"])

@app.get("/")
def read_root():
    return {"message": "Welcome to MIS API"}