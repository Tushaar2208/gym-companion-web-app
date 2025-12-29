document.getElementById("calorieForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = document.getElementById("goal").value;

    // Validate inputs
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert("Please enter a valid height.");
        return;
    }
    if (isNaN(activity) || activity <= 0) {
        alert("Please select a valid activity level.");
        return;
    }
    if (!goal) {
        alert("Please select a valid goal.");
        return;
    }

    // Debugging logs for inputs
    console.log("Inputs:", { age, gender, weight, height, activity, goal });

    // Calculate BMR using the Mifflin-St Jeor Equation
    let BMR;
    if (gender === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        alert("Please select a valid gender.");
        return;
    }

    // Calculate Maintenance Calories
    const maintenanceCalories = BMR * activity;

    // Calculate weight adjustment based on goal
    let adjustment;
    let weightChange;
    if (goal.toLowerCase() === "weight_loss") {
        adjustment = -500; // Mild weight loss (500 calories deficit)
        weightChange = -0.5; // 0.5 kg loss per week
    } else if (goal.toLowerCase() === "weight_gain") {
        adjustment = 500; // Mild weight gain (500 calories surplus)
        weightChange = 0.5; // 0.5 kg gain per week
    } else {
        alert("Please select a valid goal.");
        return;
    }

    // Debugging logs for calculations
    console.log("BMR:", BMR);
    console.log("Maintenance Calories:", maintenanceCalories);
    console.log("Adjusted Calories:", maintenanceCalories + adjustment);

    // Update the table based on the calculations
    document.getElementById("calorieTable").style.display = "table";
    document.getElementById("maintenanceCalories").innerText = maintenanceCalories.toFixed(2);
    document.getElementById("adjustedCalories").innerText = (maintenanceCalories + adjustment).toFixed(2);
    document.getElementById("weightChange").innerText = weightChange.toFixed(2);
    document.getElementById("moderateCalories").innerText = (maintenanceCalories + adjustment * 1.5).toFixed(2); // Moderate adjustment
    document.getElementById("moderateWeightChange").innerText = (weightChange * 1.5).toFixed(2);
    document.getElementById("extremeCalories").innerText = (maintenanceCalories + adjustment * 2).toFixed(2); // Extreme adjustment
    document.getElementById("extremeWeightChange").innerText = (weightChange * 2).toFixed(2);

    // Show the result section
    document.querySelector(".result-container").style.display = "block";
});