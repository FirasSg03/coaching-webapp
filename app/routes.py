from flask import Blueprint, render_template, request, jsonify
from .form import ContactForm
from .models import Client
from . import db
from . import limiter

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('/index.html')

@bp.route('/program')
def program():
    return render_template('/program.html')

@bp.route('/contact')
def contact():
    return render_template('/contact.html')

@bp.route("/contact/submit", methods=["POST"])
@limiter.limit("5 per minute")
def contact_submit():
    data = request.get_json()
    
    form = ContactForm(data=data, meta={"csrf": False})
    if form.validate():
        # Create a new Client instance
        client = Client(
            nom_enfant=form.nom_enfant.data,
            age_enfant=form.age_enfant.data,
            nom_parent=form.nom_parent.data,
            tel=form.tel.data,
            conditions_medicales=form.conditions_medicales.data,
            schedule=form.schedule.data,
            objectifs=form.objectifs.data,
            location=form.location.data,
            more_info=form.more_info.data
        )
        # Add to database session and commit
        db.session.add(client)
        db.session.commit()
        
        return jsonify({"status": "success", "message": "Client saved successfully!"})
    else:
        # Return validation errors
        return jsonify({"status": "error", "errors": form.errors}), 400
