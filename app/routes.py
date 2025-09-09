from flask import Blueprint, render_template

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
