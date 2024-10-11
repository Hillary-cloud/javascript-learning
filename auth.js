// Login Form Validation
if (document.getElementById("registerForm")) {
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear any previous messages
    const messageContainer = document.getElementById("message");
    messageContainer.innerHTML = "";
  
    // Get form values
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;
  
    // Collect error messages
    const errorMessages = [];
  
    if (username === "") {
      errorMessages.push("Username is required.");
    }
    if (!validateEmail(email)) {
      errorMessages.push("Please enter a valid email.");
    }
    if (password.length < 6) {
      errorMessages.push("Password must be at least 6 characters long.");
    }
    if (password !== confirmPassword) {
      errorMessages.push("Passwords do not match.");
    }
  
    if (errorMessages.length > 0) {
      showMessages(errorMessages); // Display all error messages
    } else {
      showMessage("Registration successful!");
    }
  });
}


  // Login Form Validation
if (document.getElementById("loginForm")) {
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear any previous messages
    const messageContainer = document.getElementById("message");
    messageContainer.innerHTML = "";
  
    // Get form values
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    // Collect error messages
    const errorMessages = [];
  
    if (!validateEmail(email)) {
      errorMessages.push("Please enter a valid email.");
    }
    if (password === "") {
      errorMessages.push("Password is required.");
    }
  
    if (errorMessages.length > 0) {
      showMessages(errorMessages); // Display all error messages
    } else {
    //   showMessage("Login successful!");
      window.location.href = "index.html"
    }
  });
}
  
  // Function to validate email
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/; // Simple email pattern from regular expression(regex) (\s+ stands for letter, number. @ is @gmail)
    return re.test(email);
  }
  
  // Function to display multiple error messages
  function showMessages(messages) {
    const messageContainer = document.getElementById("message");
    messages.forEach(function(msg) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = msg;
      errorMessage.classList.add("error-message");
      messageContainer.appendChild(errorMessage);
    });
  }
  
  // Function to display a single success message
  function showMessage(message) {
    const messageContainer = document.getElementById("message");
    const successMessage = document.createElement("p");
    successMessage.textContent = message;
    successMessage.classList.add("success-message");
    messageContainer.appendChild(successMessage);
  }
  