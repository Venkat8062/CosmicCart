from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample product data
products = [
    {"id": 1, "name": "Galaxy Shirt", "price": 25, "imageURL": "https://via.placeholder.com/200"},
    {"id": 2, "name": "Star Mug", "price": 15, "imageURL": "https://via.placeholder.com/200"},
    {"id": 3, "name": "Rocket Cap", "price": 20, "imageURL": "https://via.placeholder.com/200"}
]

@app.route("/products", methods=["GET"])
def get_products():
    return jsonify(products)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
