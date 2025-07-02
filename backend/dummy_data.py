from db import db, init_db
from app import app
from models import Product

def seed():
    with app.app_context():
        db.drop_all()
        db.create_all()

        flowers = [
            Product(name="Red Roses", price=29.99, description="A dozen red roses.", image_url="/images/red_roses.jpg", category="Romantic", color="Red"),
            Product(name="Sunflowers", price=19.99, description="Bright and cheerful sunflowers.", image_url="/images/sunflowers.jpg", category="Friendship", color="Yellow"),
            Product(name="Tulip Delight", price=24.99, description="Assorted tulips.", image_url="/images/tulips.jpg", category="Spring", color="Mixed"),
        ]

        db.session.add_all(flowers)
        db.session.commit()

if __name__ == "__main__":
    seed()
