document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("login");

  loginBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if user exists
    if (!storedUser) {
      alert("No user found! Please register first.");
      window.location.href = "register.html";
      return;
    }

    // Compare stored vs entered credentials
    if (username === storedUser.username && password === storedUser.password) {
      alert("✅ Login successful!");
      window.open("index.html","_blank"); // Go to your main library page
    } else {
      alert("❌ Incorrect username or password.");
    }
  });
});
