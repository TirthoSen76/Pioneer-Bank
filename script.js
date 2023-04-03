// Log In button event handler 
let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', () => {
    
    let loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    let transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = `block`;
});

// Deposit event button handler 
let addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click', () => {
    let depositNumber = getInputNumber('depositAmmount');
    document.getElementById('depositAmmount').value = null;
    
    updateText('currentBalance', depositNumber);
    updateText('currentDeposit', depositNumber);
});

// Withdraw button evnet handler
function getInputNumber(id) {
    let Ammount = document.getElementById(id).value;
    let ammountNumber = parseFloat(Ammount);
    return ammountNumber;
}

function updateText(id, depositNumber) {
    let current = document.getElementById(id).innerText;
    let currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

let addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click', () => {
    let withdrawNumber = getInputNumber('withdrawAmmount');
    console.log(withdrawNumber);
    updateText('currentWithdraw', withdrawNumber);
    updateText('currentBalance', -1 * withdrawNumber);
    document.getElementById('withdrawAmmount').value = null;
});