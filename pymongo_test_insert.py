# Get the database using the method we defined in pymongo_test_insert file
from pymongo_get_database import get_database
dbname = get_database()
collection_name = dbname["gpu-listing"]
item_1 = {
#  insert items here
}

item_2 = {
#  insert items here
}
collection_name.insert_many([item_1,item_2])