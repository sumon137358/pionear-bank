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
  const withdrawAmount = document.getElementById("withdrawAmount").value;
const withdrawNumber = parseFloat(withdrawAmount);

  //ride to withdraw area.......
  const withdrawCurrent = document.getElementById("withdrawCurrent").innerText;
  const withdrawCurrentNumber = parseFloat(withdrawCurrent);
  const totalWithdrawAmount = withdrawNumber + withdrawCurrentNumber;

  //file write to withdrawCurrent in samp area...
  document.getElementById("withdrawCurrent").innerText = totalWithdrawAmount;
  document.getElementById("withdrawAmount").value = "";

  // decrements amount from balance section

  const balanceAmount = document.getElementById("balanceAmount").innerText;
 const balanceAmountNumber = parseFloat(balanceAmount);
const totalBalance = balanceAmountNumber - withdrawNumber;
document.getElementById("balanceAmount").innerText = totalBalance;
});
