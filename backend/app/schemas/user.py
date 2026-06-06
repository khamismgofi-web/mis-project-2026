from pydantic import BaseModel,EmailStr
class UserRegisterSchema(BaseModel):
    username:str
    email:EmailStr
    password:str 