from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def hello():
    return 'ur mom'

@app.route('/test/get', methods=['GET'])
def get_data():
    data =  {'message': 'what is Up'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)