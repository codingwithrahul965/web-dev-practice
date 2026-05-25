// Form validation and interactivity
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Toggle password visibility
togglePasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePasswordBtn.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Real-time email validation
emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'Email is required');
    } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email');
    } else {
        clearError(emailInput, emailError);
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('input-invalid')) {
        if (validateEmail(emailInput.value)) {
            clearError(emailInput, emailError);
        }
    }
});

// Password validation
passwordInput.addEventListener('blur', () => {
    if (passwordInput.value.trim() === '') {
        showError(passwordInput, passwordError, 'Password is required');
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
    } else {
        clearError(passwordInput, passwordError);
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.classList.contains('input-invalid')) {
        if (passwordInput.value.length >= 6) {
            clearError(passwordInput, passwordError);
        }
    }
});

// Show error
function showError(input, errorElement, message) {
    input.classList.remove('input-valid');
    input.classList.add('input-invalid');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear error
function clearError(input, errorElement) {
    input.classList.remove('input-invalid');
    input.classList.add('input-valid');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    emailError.classList.remove('show');
    passwordError.classList.remove('show');
    emailInput.classList.remove('input-invalid', 'input-valid');
    passwordInput.classList.remove('input-invalid', 'input-valid');

    // Validate all fields
    let isValid = true;

    // Validate email
    if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    // Validate password
    if (passwordInput.value.trim() === '') {
        showError(passwordInput, passwordError, 'Password is required');
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError(passwordInput, passwordError);
    }

    // If form is valid, submit
    if (isValid) {
        console.log('Form submitted successfully!');
        console.log({
            email: emailInput.value,
            password: passwordInput.value,
            rememberMe: document.querySelector('input[name="remember"]').checked
        });

        // Show success message (you can replace this with actual API call)
        alert('Login successful! (This is a demo)');
        
        // Optionally reset form
        loginForm.reset();
        emailInput.classList.remove('input-valid');
        passwordInput.classList.remove('input-valid');
    }
});

// Social login buttons
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = btn.classList.contains('google-btn') ? 'Google' : 'GitHub';
        console.log(`Login with ${provider}`);
        alert(`Login with ${provider} would be implemented here`);
    });
});

// Forgot password link
document.querySelector('.forgot-password').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Forgot password clicked');
    alert('Password reset functionality would be implemented here');
});

// Sign up link
document.querySelector('.signup-link').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Sign up clicked');
    alert('Redirect to sign up page would happen here');
});
