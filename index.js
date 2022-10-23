// submit -area start from here
var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  let loginArea = document.querySelector(".container");
  loginArea.style.display = "none";
  let transectionArea = document.querySelector(".transection-area");
  transectionArea.style.display = "block";
});

// transection arae start from here

let depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function () {
  let depositInput = document.getElementById("diposit-input").value;
  let depositNumber = parseFloat(depositInput);
  const depositAmount = document.getElementById("depositAmount").innerText;
  const depositAmountNumber = parseFloat(depositAmount);
  const totalDeposit = depositAmountNumber + depositNumber;

  //write to depositAmount......

  document.getElementById("depositAmount").innerText = totalDeposit;
  document.getElementById("diposit-input").value = "";

  // added tk in balance area
  const balanceAmount = document.getElementById("balanceAmount").innerText;
  // console.log(balanceAmount);
  const balanceAmountNumber = parseFloat(balanceAmount);
  // console.log(balanceAmountNumber+33);
  const totalBalance = balanceAmountNumber + depositNumber;
  //write to balanceAmount
  document.getElementById("balanceAmount").innerText = totalBalance;
});
// withdraw diposit event handler......
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdrawInput").value;
const withdrawNumber = parseFloat(withdrawInput);

  //ride to withdraw area.......
  const withdrawCurrentAmount = document.getElementById("withdrawCurrentAmount").innerText;
  const withdrawCurrentNumber = parseFloat(withdrawCurrentAmount);
  const totalWithdrawAmount = withdrawNumber + withdrawCurrentNumber;

  //file write to withdrawCurrentAmount in samp area...
  document.getElementById("withdrawCurrentAmount").innerText = totalWithdrawAmount;
  document.getElementById("withdrawInput").value = "";

  // decrements amount from balance section

  const balanceAmount = document.getElementById("balanceAmount").innerText;
 const balanceAmountNumber = parseFloat(balanceAmount);
const totalBalance = balanceAmountNumber - withdrawNumber;
document.getElementById("balanceAmount").innerText = totalBalance;
});
