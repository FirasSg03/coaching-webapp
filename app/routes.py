from flask import Blueprint, render_template, request, jsonify
from .form import ContactForm
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
        # Access validated data
        cleaned_data = {field.name: field.data for field in form}
        print("Form data:", cleaned_data)
        return jsonify({"status": "success", "message": "Form received!"})
    else:
        # Return validation errors
        return jsonify({"status": "error", "errors": form.errors}), 400
