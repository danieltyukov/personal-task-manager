from pydantic import BaseModel

class Todo(BaseModel):
    title: str
    description: str
    # id: int
    # completed: bool
    # order: int
    # user_id: int