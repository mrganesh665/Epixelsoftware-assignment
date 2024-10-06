document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission until validation passes
    
    // Grab input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('form-error-message');
    
    // Validate if fields are not empty
    if (!firstName || !lastName || !email || !phone || !password) {
        errorMessage.textContent = "All fields are required.";
        errorMessage.style.display = "block";
        return;
    }

    // Validate email format using a simple regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return;
    }

    // Validate phone number (only digits, min length 10)
    const phonePattern = /^[0-9]{10,14}$/;
    if (!phone.match(phonePattern)) {
        errorMessage.textContent = "Please enter a valid phone number (10-14 digits).";
        errorMessage.style.display = "block";
        return;
    }

    // Validate password length (at least 6 characters)
    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        errorMessage.style.display = "block";
        return;
    }

    // If all validations pass, hide the error message and allow form submission
    errorMessage.style.display = "none";

    // Here you can proceed with form submission or further processing
    alert("Form submitted successfully!");

    // Optionally, you can submit the form if needed using:
    // document.getElementById('signupForm').submit();
});