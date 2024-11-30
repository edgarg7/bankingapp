// Event listener to run after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Redirect to login page if user is not logged in
    if (!localStorage.getItem("isLoggedIn")) {
        window.location.href = "./login.html"; // Redirects unauthenticated users
    }

    // Retrieve the balance from localStorage or initialize if not set
    let balance = parseFloat(localStorage.getItem("balance"));

    if (isNaN(balance)) {
        balance = 10000; // Set default balance to $10,000 if not available
        localStorage.setItem("balance", balance.toString()); // Save balance to localStorage
    }

    // Display the balance in the dashboard
    document.getElementById("balance").textContent = `$${balance.toFixed(2)}`; // Format balance to 2 decimal places
});

// Logout function to end session
function logout() {
    localStorage.removeItem("isLoggedIn"); // Remove login flag from localStorage
    window.location.href = "./login.html"; // Redirect to login page
}
