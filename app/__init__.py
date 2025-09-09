from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    # create databases and tables if they do not exist
    """from .models import User, Table, Data
    with app.app_context():
        db.create_all()"""
    
    #import and register blueprints
    from . import routes
    app.register_blueprint(routes.bp) 
 
    #return active session
    """@login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))"""

    return app