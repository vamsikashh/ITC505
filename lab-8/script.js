/* script.js */
const sanitizeInput = (input) => {
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
};

document.getElementById('secureForm').addEventListener('submit', function (e) {
    const firstName = sanitizeInput(document.getElementById('firstName').value.trim());
    const lastName = sanitizeInput(document.getElementById('lastName').value.trim());
    const email = sanitizeInput(document.getElementById('email').value.trim());
    const password = sanitizeInput(document.getElementById('password').value.trim());
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value.trim());

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('All fields are required.');
        e.preventDefault();
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email format.');
        e.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        e.preventDefault();
    }
else{
    alert("you've Logged in sucessfully")
}


});
