from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, RadioField
from wtforms.validators import DataRequired, NumberRange, Optional, Regexp

class ContactForm(FlaskForm):
    # Informations sur l'enfant
    nom_enfant = StringField("Nom de l'enfant", validators=[DataRequired()])
    age_enfant = IntegerField("Age de l'enfant", validators=[DataRequired(), NumberRange(min=1, max=17)])
    nom_parent = StringField("Nom du parent", validators=[DataRequired()])
    tel = StringField('WhatsApp Number', validators=[DataRequired(), Regexp(r'^\+216\d{8}$',)])
    conditions_medicales = TextAreaField("Conditions médicales", validators=[Optional()])
    
    # Préférences
    schedule = TextAreaField("Horaires", validators=[Optional()])
    objectifs = TextAreaField("Objectifs en natation", validators=[Optional()])
    location = RadioField("Lieu", choices=[("club-gammarth","Le Club"), ("a-domicile","À domicile"), ("autre","Autre")], validators=[DataRequired()])
    
    # Renseignements complémentaires
    more_info = TextAreaField("Renseignements complémentaires", validators=[Optional()])