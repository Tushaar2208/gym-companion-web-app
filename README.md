# Gym Companion Web App
#### Video Demo:  <https://youtu.be/LScOSHLW-xk>
#### Description:

**Name:** Tushar
**GitHub Username:** Tushaar2208
**City, Country:** [Your City, Country]
**Date:** December 2025

---

This is a web-based application designed to help gym users track their fitness goals and manage their membership. The project was built using **Python (Flask)**, **SQL**, **HTML**, and **CSS**. It solves the problem of needing multiple different calculators (BMI, Protein, Rep Max) by consolidating them into a single, easy-to-use interface, while also allowing new users to sign up for the gym.

### Key Features
* **Membership Registration:** Users can sign up for the gym, and their details are securely stored in a SQL database.
* **Fitness Calculators:** Includes tools for calculating:
    * **BMI (Body Mass Index):** Determines if a user is in a healthy weight range.
    * **Protein Intake:** Estimates daily protein needs based on activity level.
    * **Maintenance Calories:** Calculates calories needed to maintain current weight.
    * **One-Rep Max:** Estimates the maximum weight a user can lift for one repetition.
* **Feedback System:** Users can send feedback which is processed by the server and acknowledged with a success page.
* **Robust Error Handling:** As a core feature, the application implements server-side validation (in Python) to prevent empty form submissions and handle database errors gracefully, ensuring the app doesn't crash on invalid input.

### Distinction from Previous Projects
This project represents a significant evolution from my previous gym website project, [Strive-Fit-Gym](https://github.com/Tushaar2208/Strive-Fit-Gym-). While my earlier work focused primarily on the **front-end design** (HTML, CSS, and basic JavaScript) to create a visual layout, this submission upgrades the concept into a fully functional **Full-Stack Web Application**.

Key technical improvements include:
* **From Static to Dynamic:** The previous project was a static website. This project uses **Flask (Python)** to dynamically render pages and process user data on the server side.
* **Database Integration:** Unlike the previous version which could not store data, I integrated a **SQLite database** (`gym.db`) to persistently store user registrations and feedback.
* **Backend Logic:** I implemented complex server-side logic for the fitness calculators and added robust **error checking** to handle invalid inputs securely.

### Project Structure

The project consists of the following main files and directories:

#### `app.py`
This is the main controller for the application. It initializes the Flask app and defines the routes (URLs) for the website.
* **Routes:** It includes routes for the homepage (`/`), registration (`/register`), and various tools (`/bmi`, `/protein`, etc.).
* **Logic:** It handles form submissions (POST requests), performs **server-side validation** to ensure no empty fields are submitted, and interacts with the SQLite database.
* **Database Integration:** Uses the CS50 SQL library to execute queries like `INSERT INTO members` to save user data.

#### `gym.db`
A SQLite database that stores the application's data.
* **Table `members`:** Stores registration details (First Name, Last Name, Email, Phone, Club Location).
* **Table `feedbacks`:** Stores user messages and feedback.

#### `templates/`
This folder contains the HTML files for the application. I used **Jinja2** templating to make the pages dynamic.
* `layout.html`: The base template that contains the navigation bar and footer. All other pages extend this file to ensure a consistent design.
* `index.html`: The homepage.
* `register.html` / `success.html`: Forms and confirmation pages for user actions.
* `bmi.html`, `protein.html`, `liftrep.html`: The interface pages for the specific fitness calculators.

#### `static/`
Contains the CSS files (e.g., `styles.css`) used to style the application.

### Design Choices
**Visual Style:**
The design of the website was heavily inspired by the **Equinox Gym** website. I aimed to replicate that high-end, luxury fitness aesthetic. To achieve this, I used:
* A minimal, dark-themed color palette to convey sophistication.
* High-contrast typography for readability and modern appeal.
* Clean spacing and layout to ensure a premium user experience.

**Technical Decisions:**
I chose **Flask** because it is lightweight and allows for quick setup of routes and request handling in Python. For the database, **SQLite** was chosen for its simplicity and portability, which is perfect for a project of this scale. I prioritized **error checking** in the backend Python code (rather than just relying on HTML `required` attributes) to ensure data integrity and prevent server errors.

### How to Run
1.  Open the terminal.
2.  Run the command: `flask run`
3.  Click the link provided in the terminal to view the website.
