// Function to save form data to localStorage and redirect to index.html
function saveFormData() {
    // Get form values
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    var rememberMe = document.getElementById('rememberCheckbox').checked;

    // Create an object to store in localStorage
    var formData = {
        email: email,
        password: password,
        rememberMe: rememberMe
    };

    // Save the object in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to index.html
    window.location.href = './index.html';
}

// Function to load saved form data from localStorage (on page load)
window.onload = function () {
    var savedFormData = localStorage.getItem('formData');

    if (savedFormData) {
        // If there is saved data, populate the form fields
        var formData = JSON.parse(savedFormData);
        document.getElementById('emailInput').value = formData.email;
        document.getElementById('passwordInput').value = formData.password;
        document.getElementById('rememberCheckbox').checked = formData.rememberMe;
    }
};