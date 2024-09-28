import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@localhost/hospital_data'  # Update with your DB credentials
    SQLALCHEMY_TRACK_MODIFICATIONS = False
