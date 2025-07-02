# Flask entry point
from flask import Flask
from flask_cors import CORS
from db import db, init_db
from routes.products import products_bp
from routes.cart import cart_bp
# from routes.orders import orders_bp
# from routes.auth import auth_bp
# from routes.admin import admin_bp

app = Flask(__name__)
app.config.from_pyfile("config.py")
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

init_db(app)

# Register Blueprints
app.register_blueprint(products_bp, url_prefix="/api/products")
app.register_blueprint(cart_bp, url_prefix="/api/cart")
# app.register_blueprint(orders_bp, url_prefix="/api/orders")
# app.register_blueprint(auth_bp, url_prefix="/api/auth")
# app.register_blueprint(admin_bp, url_prefix="/api/admin")

if __name__ == "__main__":
    app.run(debug=True, port=5050)

