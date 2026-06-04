import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

DATABASE_URL = os.getenv(DATABASE_URL,echo=True)
DATABASE_URL = os.getenv(
    "DATABASE_URL","postgresql://postgres:password@localhost:5432/mis_db",
)

engine = create_engine(DATABASE_URL,echo=True)
Base = declarative_base()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def init_db():
    Base.metadata.create_all(bind=engine)

def get_session():
    with SessionLocal() as session:
        yield session


