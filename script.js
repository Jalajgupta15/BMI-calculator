function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    var bmi = weight / (height * height);
    var result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal or Healthy Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    document.getElementById("bmiResult").textContent = "The person is " + result;
}
