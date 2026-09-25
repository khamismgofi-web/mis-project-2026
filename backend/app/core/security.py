from datetime import datetime, timedelta
from typing import Any, Dict, Optional
import bcrypt  # Clean, modern tool for password scrambling
from jose import JWTError, jwt
from app.core.config import settings

def hash_password(password: str) -> str:
    """Turns a plain text password into a secure scrambled string."""
    salt = bcrypt.gensalt()
    hashed_bytes = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_bytes.decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Compares a typed password with the scrambled string in the database."""
    try:
        return bcrypt.checkpw(
            plain_password.encode('utf-8'), 
            hashed_password.encode('utf-8')
        )
    except Exception:
        return False

def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """Creates a temporary digital VIP pass for the logged-in user."""
    to_encode = data.copy()
    # Use timezone-aware UTC or standard utcnow for token expiration
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(
        to_encode,
        settings.SECRET_KEY.get_secret_value(),
        algorithm=settings.ALGORITHM,
    )

def decode_access_token(token: str) -> Dict[str, Any]:
    """Reads the contents of the VIP pass and raises an error if it is invalid."""
    try:
        payload = jwt.decode(token, settings.SECRET_KEY.get_secret_value(), algorithms=[settings.ALGORITHM])
        return payload
    except JWTError as exc:
        raise exc

def decode_token(token: str) -> Optional[str]:
    """Extracts the unique user identity (sub) from the VIP pass."""
    try:
        payload = jwt.decode(token, settings.SECRET_KEY.get_secret_value(), algorithms=[settings.ALGORITHM])
        return payload.get("sub")
    except JWTError:
        return None