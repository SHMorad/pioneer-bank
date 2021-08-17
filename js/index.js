// loginBtn Even Handeler
var loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
const loginArea = document.getElementById('login-area');
loginArea.style.display = "none";
const transactionArea = document.getElementById('transaction-area');
transactionArea.style.display ='block';
})

// Deposite button even handeler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById('depositAmount').value
    const depositNumber = parseFloat(depositAmount)

    updateSpanText("currentDeposit", depositNumber )
    updateSpanText("currentBalance", depositNumber)

    document.getElementById('depositAmount').value = ""
})
// WithDraw button even handeler
const WithdrawBtn = document.getElementById('addWithderaw');
WithdrawBtn.addEventListener('click', function(){
    const WithdrawNumber = getInputNumber('withdrawAmount')
    updateSpanText("currentWithdraw", WithdrawNumber)
    updateSpanText("currentBalance", -1 * WithdrawNumber)

    document.getElementById('withdrawAmount').value =""
})
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount)
    return amountNumber;
}
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currantNumber = parseFloat(current);
    const totalAmount = depositNumber + currantNumber
    document.getElementById(id).innerText  = totalAmount;
}





