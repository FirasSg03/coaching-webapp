from . import db
class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    # Informations sur l'enfant
    nom_enfant = db.Column(db.String(100), nullable=False)
    age_enfant = db.Column(db.Integer, nullable=False)
    # Parent info
    nom_parent = db.Column(db.String(100), nullable=False)
    tel = db.Column(db.String(15), nullable=False) 
    # Medical info
    conditions_medicales = db.Column(db.Text, nullable=True)
    # Preferences
    schedule = db.Column(db.Text, nullable=True)
    objectifs = db.Column(db.Text, nullable=True)
    location = db.Column(db.String(50), nullable=False, default='club-gammarth')
    # Additional info
    more_info = db.Column(db.Text, nullable=True)

