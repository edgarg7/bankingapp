function transferFunds() {
    const transferAmount = parseFloat(document.getElementById("transfer-amount").value);
    let balance = parseFloat(localStorage.getItem("balance") || "10000");

    if (transferAmount > 0 && transferAmount <= balance) {
        balance -= transferAmount;
        localStorage.setItem("balance", balance.toString());

        // Log transaction
        logTransaction("Transfer", transferAmount);

        document.getElementById("transfer-feedback").style.display = "block";
        document.getElementById("transfer-feedback").textContent = `Transfer successful! New balance: $${balance.toFixed(2)}`;
    } else {
        alert("Invalid amount or insufficient funds.");
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
