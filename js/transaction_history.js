document.addEventListener("DOMContentLoaded", () => {
    const transactionList = JSON.parse(localStorage.getItem("transactions")) || [];

    const listElement = document.getElementById("transaction-list");

    if (transactionList.length === 0) {
        listElement.innerHTML = "<li>No transactions yet.</li>";
    } else {
        transactionList.forEach(transaction => {
            const listItem = document.createElement("li");
            listItem.textContent = `${transaction.type}: $${transaction.amount} - ${transaction.date}`;
            listElement.appendChild(listItem);
        });
    }
});

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "./login.html";
}
