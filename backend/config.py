# sets DB and secret key
import os

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(basedir, 'flowers.db')}"
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = "super-secret-key"

SESSION_COOKIE_NAME = "floracart"
SESSION_COOKIE_SAMESITE = "Lax"     # 'Strict' can cause 403s
SESSION_COOKIE_SECURE = False       # Must be False for local HTTP