function depositFunds() {
    const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    let balance = parseFloat(localStorage.getItem("balance") || "10000");

    if (depositAmount > 0) {
        balance += depositAmount;
        localStorage.setItem("balance", balance.toString());

        // Log transaction
        logTransaction("Deposit", depositAmount);

        document.getElementById("deposit-feedback").style.display = "block";
        document.getElementById("deposit-feedback").textContent = `Deposit successful! New balance: $${balance.toFixed(2)}`;
    } else {
        alert("Please enter a valid deposit amount.");
    }
}

function logTransaction(type, amount) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push({
        type,
        amount,
        date: new Date().toLocaleString()
    });
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
