// script.js

function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height === '' || weight === '') {
        alert('Please enter both height and weight');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let resultText;

    if (bmi < 18.5) {
        resultText = `Your BMI is ${bmi.toFixed(1)}. You are underweight.`;
    } else if (bmi < 24.9) {
        resultText = `Your BMI is ${bmi.toFixed(1)}. You are at a healthy weight.`;
    } else if (bmi < 29.9) {
        resultText = `Your BMI is ${bmi.toFixed(1)}. You are overweight.`;
    } else {
        resultText = `Your BMI is ${bmi.toFixed(1)}. You are obese.`;
    }

    document.getElementById('results').innerText = resultText;
}
