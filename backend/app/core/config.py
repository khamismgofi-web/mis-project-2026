from pydantic_settings import BaseSettings
from pydantic import SecretStr


class Settings(BaseSettings):
    APP_NAME: str = "MIS Backend"
    ENVIRONMENT: str = "development"
    DATABASE_URL: str = "postgresql://postgres:password@localhost:5432/mis_db"
    SECRET_KEY: SecretStr = SecretStr("change-me-in-production")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    TOKEN_PREFIX: str = "Bearer"

    class Config:
        env_file = "env"
        env_file_encoding = "utf-8"
        case_sensitive = False


settings = Settings()
