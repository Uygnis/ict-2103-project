import uuid
from typing import Optional
from pydantic import BaseModel, Field
from datetime import datetime

class Record(BaseModel):
    # id: Field(default_factory=uuid.uuid4, alias="_id")
    item_ID: int = Field(...)
    CPU_Name: str = Field(...)
    GPU_Name: str = Field(...)
    ram: int = Field(...)
    price: float = Field(...)
    Listing:str = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "item_ID": 1,
                "CPU_Name": "Ryzen 9 5900X",
                "GPU_Name": "Radeon RX 6700 XT",
                "ram": 16,
                "price": 1.99,
                "Listing": "...",
                "date": "2021-05-01T00:00:00Z"
            }
        }
    def __str__(self):
        return f"item_ID={self.item_ID}, CPU_Name={self.CPU_Name}, GPU_Name={self.GPU_Name}, ram={self.ram}, price={self.price}, Listing={self.Listing}, date={self.date})"

class UpdateRecordModel(BaseModel):
    item_ID: Optional[int]
    CPU_Name: Optional[str]
    GPU_Name: Optional[str]
    ram: Optional[int]
    price: Optional[float]
    Listing: Optional[str]
    date: Optional[datetime]

    class Config:
        schema_extra = {
            "example": {
                "item_ID": 1,
                "CPU_Name": "Ryzen 9 5900X",
                "GPU_Name": "Radeon RX 6700 XT",
                "ram": 16,
                "price": 1.99,
                "Listing": "...",
                "date": "2021-05-01T00:00:00Z"
            }
        }