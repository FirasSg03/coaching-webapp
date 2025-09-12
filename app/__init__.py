from flask import Flask
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
limiter = Limiter(key_func=get_remote_address)

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    db.init_app(app)

    # init limiter to prevent spam
    limiter.init_app(app)
    
    # create databases and tables if they do not exist
    from .models import Client
    with app.app_context():
        db.create_all()
    
    #import and register blueprints
    from . import routes
    app.register_blueprint(routes.bp) 

    return app