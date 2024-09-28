from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Patient
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)  # Enable CORS for all routes
db.init_app(app)

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/api/save-patient', methods=['POST'])
def save_patient():
    data = request.get_json()
    
    # Create a new Patient instance
    new_patient = Patient(
        fname=data.get('fname'),
        lname=data.get('lname'),
        sex=data.get('sex'),
        DOB=data.get('DOB'),
        phone_home=data.get('phone_home'),
        email=data.get('email')
    )

    try:
        db.session.add(new_patient)
        db.session.commit()
        return jsonify({"message": "Patient information saved successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "Failed to save patient information.", "error": str(e)}), 500

@app.route('/api/delete-patient', methods=['DELETE'])
def delete_patient():
    data = request.get_json()
    email = data.get('email')

    patient = Patient.query.filter_by(email=email).first()
    if patient:
        db.session.delete(patient)
        db.session.commit()
        return jsonify({"message": "Patient account deleted successfully!"}), 200
    else:
        return jsonify({"message": "Patient not found."}), 404

if __name__ == '__main__':
    app.run(debug=True)
