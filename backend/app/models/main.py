from app.core.database import engine,Base
from app.models import models

print("Connecting to Neon and creating tables")
Base.metadata.create_all(bind=engine)
print("Tables created successfully")