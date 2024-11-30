function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "user" && password === "password") {
        // Redirect to the dashboard page
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "./dashboard.html";
    } else {
        // Show feedback if login fails
        const feedback = document.getElementById("login-feedback");
        feedback.style.display = "block";
    }
}
