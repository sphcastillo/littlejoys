#handles GET /api/products
from flask import Blueprint, jsonify
from models import Product
from db import db

products_bp = Blueprint("products", __name__)

@products_bp.route("/", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "image_url": p.image_url,
            "category": p.category,
            "color": p.color,
        } for p in products
    ])
