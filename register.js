document.addEventListener("DOMContentLoaded", function() {

  // When the register button is clicked
  const registerBtn = document.getElementById("Register");
  registerBtn.addEventListener("click", function(e) {
    e.preventDefault(); // stop the form from reloading the page

    // Get user inputs
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate inputs
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    // Save user data in localStorage (as JSON)
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("✅ You registered successfully! You can now log in.");
    
    // Redirect to login page
    window.location.href = "login.html";
  });

});
