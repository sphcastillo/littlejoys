from flask import Blueprint, request, jsonify, session
from models import Product
from db import db

cart_bp = Blueprint("cart", __name__)

# Helper to make sure the cart exists in session
def init_cart():
    if "cart" not in session:
        session["cart"] = []

@cart_bp.route("/test-session", methods=["GET"])
def test_session():
    session["test"] = "hello"
    return jsonify({"session_test": session.get("test")})

@cart_bp.route("/", methods=["GET"])
def get_cart():
    init_cart()
    cart_items = []
    for product_id in session["cart"]:
        product = Product.query.get(product_id)
        if product:
            cart_items.append({
                "id": product.id,
                "name": product.name,
                "price": product.price,
                "image_url": product.image_url
            })
    return jsonify(cart_items)

@cart_bp.route("/", methods=["POST"])
def add_to_cart():
    init_cart()
    data = request.get_json()

    if not data or "product_id" not in data:
        return jsonify({"error": "Product ID is required"}), 400

    product_id = data["product_id"]
    if product_id not in session["cart"]:
        session["cart"].append(product_id)
        session.modified = True
        return jsonify({"message": "Product added to cart"})
    else:
        return jsonify({"message": "Product already in cart"})

@cart_bp.route("/<int:product_id>", methods=["DELETE"])
def remove_from_cart(product_id):
    init_cart()
    if product_id in session["cart"]:
        session["cart"].remove(product_id)
        session.modified = True
        return jsonify({"message": "Product removed from cart"})
    return jsonify({"error": "Product not in cart"}), 404
