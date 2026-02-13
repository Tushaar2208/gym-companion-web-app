Here is your content cleanly formatted as a professional **README.md** file, ready to paste directly into GitHub:

---

# Gym Companion Web App

🎥 **Video Demo:**
[https://youtu.be/LScOSHLW-xk](https://youtu.be/LScOSHLW-xk)

---

## Overview

Gym Companion is a web-based gym promotional and utility platform built as my CS50 final project.

The application combines a gym membership registration system with interactive fitness calculators (BMI, Protein Intake, Maintenance Calories, and One-Rep Max) into a single streamlined interface.

The goal of this project was to demonstrate full-stack web development using Flask and SQLite while consolidating commonly used fitness tools into one accessible platform.

---

## Tech Stack

* Python (Flask)
* SQLite
* HTML5
* CSS3
* Jinja2 Templating
* CS50 SQL Library

---

## Core Features

### Membership Registration

* Users can register for gym membership
* Data is stored in a SQLite database
* Server-side validation prevents empty or invalid submissions

### Fitness Calculators

* **BMI Calculator** – Determines weight classification based on height and weight
* **Protein Intake Calculator** – Estimates daily protein requirements
* **Maintenance Calorie Calculator** – Estimates caloric needs
* **One-Rep Max Calculator** – Estimates maximum lifting capacity

> ⚠️ Note: All calculators provide general fitness estimates and are not intended for medical use.

### Feedback System

* Users can submit feedback
* Feedback is stored in the database
* Users receive a success confirmation page

### Backend Validation

The application implements robust **server-side validation in Python** to:

* Prevent empty form submissions
* Handle database errors gracefully
* Maintain data integrity

---

## Project Architecture

### `app.py`

Main controller of the application.

Responsibilities:

* Defines routes (`/`, `/register`, `/bmi`, etc.)
* Handles GET and POST requests
* Performs server-side validation
* Executes SQL queries to store and retrieve data

### `gym.db`

SQLite database containing:

* `members` table – Stores registration details
* `feedbacks` table – Stores user feedback messages

### `templates/`

HTML templates using Jinja2:

* `layout.html` – Base layout template
* `index.html` – Homepage
* `register.html` – Registration form
* `success.html` – Confirmation page
* `bmi.html`, `protein.html`, `liftrep.html` – Calculator pages

### `static/`

Contains CSS styling files.

---

## Technical Evolution

This project builds upon a previous static gym website project.

Previous version:

* Static HTML/CSS site
* No backend logic
* No database integration

Current version improvements:

* Dynamic routing using Flask
* SQLite database integration
* Persistent data storage
* Server-side validation
* Backend calculator logic

This represents a transition from front-end development to full-stack web application design.

---

## Design Approach

### Visual Style

The design draws inspiration from premium gym branding aesthetics, featuring:

* Dark, minimal color palette
* Clean spacing
* High-contrast typography
* Modern layout structure

### Technical Decisions

* **Flask** was chosen for lightweight and flexible backend development.
* **SQLite** was selected for simplicity and portability.
* Emphasis was placed on backend validation to ensure reliability and stability.

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Tushaar2208/gym-companion-web-app.git
```

### 2. Navigate to Project Directory

```bash
cd gym-companion-web-app
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Application

```bash
flask run
```

### 5. Open in Browser

Click the local development link shown in the terminal.

---

## Future Improvements

* Improve calculator accuracy
* Add user authentication system
* Enhance mobile responsiveness
* Deploy to a cloud platform
* Add progress tracking features

