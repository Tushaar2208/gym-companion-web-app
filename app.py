import os
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session

# Configure application
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.secret_key = "super_secret_key"

# Connect to database
db = SQL("sqlite:///gym.db")

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    return response

# --- ROUTES ---


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/tools")
def tools():
    return render_template("tools.html")

@app.route("/protein")
def protein():
    return render_template("protein.html")

@app.route("/maintenance")
def maintenance():
    return render_template("maintenance.html")

@app.route("/liftrep")
def liftrep():
    return render_template("liftrep.html")

@app.route("/bmi")
def bmi():
    return render_template("bmi.html")

@app.route("/register", methods=["POST"])
def register():
    """Handle the Join Now form"""
    # 1. Get data (Must match HTML name attributes)
    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")
    email = request.form.get("email")
    company_email = request.form.get("company_email")
    phone = request.form.get("phone")
    club = request.form.get("club")

    # 2. Validation
    if not first_name or not last_name or not email or not phone or not club:
        return "Error: Missing required fields.", 400

    # 3. Insert into DB (Fixes the mismatch error)
    db.execute("""
        INSERT INTO members (first_name, last_name, email, company_email, phone, club)
        VALUES (?, ?, ?, ?, ?, ?)
    """, first_name, last_name, email, company_email, phone, club)

    return render_template("success.html", name=first_name)
