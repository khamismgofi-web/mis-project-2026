from fastapi import FastAPI

app = FastAPI(
    title="Management Information System API",
    description="MIS backend built with FastAPI",
    version="1.0.0"
)

@app.get("/")
def root():
    return {"message": "MIS API is running"}
