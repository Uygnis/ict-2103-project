from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder

from typing import List

from models import Record, UpdateRecordModel

router = APIRouter()

# @router.post("/", response_description="Create a new record", status_code=status.HTTP_201_CREATED, response_model=Record)
# def create_record(request: Request, record: Record = Body(...)):
#     record = jsonable_encoder(record)
#     new_record = request.app.database["amazonData"].insert_one(record)
#     created_record = request.app.database["amazonData"].find_one(
#         {"_id": new_record.inserted_id}
#     )

#     return created_record

@router.get("/", response_description="List all records" , response_model=List[Record])
def list_records(request: Request):
    records = list(request.app.database["amazonData"].find())
    return records
