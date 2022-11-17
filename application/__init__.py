from flask import Flask
from pymongo import MongoClient
from dotenv import dotenv_values

config = dotenv_values(".env")

app = Flask(__name__, template_folder='templates')

from application import routes