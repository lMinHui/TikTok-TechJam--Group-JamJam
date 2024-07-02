from flask import Flask, jsonify, request
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)

@app.route('/')
def hello():
    return 'ur mom'

@app.route('/test/get', methods=['GET'])
def get_data():
    data =  {'message': 'what is Up'}
    return jsonify(data)

def check_dbConnection():
    uri = "mongodb+srv://MinJam:JSr4XY0fJgfkcMY6@cluster0.4gdeup7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    client = MongoClient(uri, server_api=ServerApi('1'))
    try:
        client.admin.command('ping')
        print("Pinged DB. Successfully connected!")
    except Exception as e:
        print(e)

if __name__ == '__main__': 
    check_dbConnection()   
    app.run(debug=True)