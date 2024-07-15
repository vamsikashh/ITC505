document.getElementById('calculate').addEventListener('click', function() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;
    const resultDiv = document.getElementById('result');

    if (age === '' || height === '' || weight === '' || activity === '') {
        resultDiv.innerHTML = 'Please enter all the required details';
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const tdee = (bmr * activity).toFixed(2);
    const proteinIntake = (0.8 * weight).toFixed(2);

    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    resultDiv.innerHTML = `
        <p>Your BMI is <strong>${bmi}</strong>. You are <strong>${category}</strong>.</p>
        <p>Your daily calorie intake to maintain your weight is <strong>${tdee} kcal</strong>.</p>
        <p>Your daily protein intake should be <strong>${proteinIntake} grams</strong>.</p>
    `;
});
