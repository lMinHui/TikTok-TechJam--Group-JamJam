from flask import Flask, jsonify, request
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import json_util
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'ur mom'

@app.route('/test/get', methods=['GET'])
def get_data():
    data =  {'message': 'what is Up'}
    return jsonify(data)

mongo_password = os.getenv("MONGO_PASSWORD")
uri = "mongodb+srv://MinJam:JSr4XY0fJgfkcMY6@cluster0.4gdeup7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

@app.route('/test', methods=['GET'])
def check_dbConnection():
    uri = "mongodb+srv://MinJam:JSr4XY0fJgfkcMY6@cluster0.4gdeup7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    client = MongoClient(uri, server_api=ServerApi('1'))
    try:
        client.admin.command('ping')
        return jsonify({"message": "Pinged DB. Successfully connected!"})
    except Exception as e:
        return jsonify({"error": str(e)})
    

@app.route('/list-databases', methods=['GET'])
def list_databases():
    try:
        client = MongoClient(uri)
        database_names = client.list_database_names()
        return jsonify({"databases": database_names})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/list-collections/<database_name>', methods=['GET'])
def list_collections(database_name):
    try:
        client = MongoClient(uri)
        db = client.get_database(database_name)
        collection_names = db.list_collection_names()
        return jsonify({"collections": collection_names})
    except Exception as e:
        return jsonify({"error": str(e)})

def analyze_document(document, field_types):
    for key, value in document.items():
        if isinstance(value, dict):
            analyze_document(value, field_types)
        elif isinstance(value, list):
            for item in value:
                if isinstance(item, dict):
                    analyze_document(item, field_types)
        else:
            current_type = type(value).__name__
            if key not in field_types:
                field_types[key] = [current_type]
            else:
                if current_type not in field_types[key]:
                    field_types[key].append(current_type)

@app.route('/field-types', methods=['GET'])
def get_field_types():
    client = MongoClient(uri)
    db = client.get_database('tiktokHack')  
    collection = db.get_collection('Products')  

    sample_documents = collection.find({})

    field_types = {}

    for document in sample_documents:
        analyze_document(document, field_types)

    json_output = json_util.dumps(field_types)

    return json_output

@app.route('/fetch-data', methods=['GET'])
def fetch_data():
    try:
        client = MongoClient(uri)
        db = client.get_database('tiktokHack')  
        collection = db.get_collection('Videos')  

        videos = collection.find({})

        # Convert cursor to list and then to JSON
        videoJson = json_util.dumps(list(videos))

        return videoJson

    except Exception as e:
        print(e)
        return jsonify({"error": str(e)})

if __name__ == '__main__': 
    #check_dbConnection()   
    app.run(debug=True)
