/* ===============================
   Hide All Feature Cards
================================ */
function hideAll() {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "none";
  });
}

/* ===============================
   Feature Selector
================================ */
function selectFeature() {
  hideAll();
  let feature = document.getElementById("feature").value;

  switch (feature) {
    case "calculator":
      document.getElementById("calculator").style.display = "block";
      break;

    case "currency":
      document.getElementById("currency").style.display = "block";
      break;

    case "unit":
      document.getElementById("unit").style.display = "block";
      break;

    case "grade":
      document.getElementById("grade").style.display = "block";
      break;

    case "electricity":
      document.getElementById("electricity").style.display = "block";
      break;

    case "theme":
      document.getElementById("theme").style.display = "block";
      break;
  }
}

/* ===============================
   Calculator
================================ */
function calculate() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let op = document.getElementById("operator").value;
  let result;

  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Error (Divide by 0)";
      break;
  }

  document.getElementById("calcResult").innerText =
    "Result: " + result;
}

/* ===============================
   Currency Converter
================================ */
function convertCurrency() {
  let amt = Number(document.getElementById("amount").value);
  let type = document.getElementById("currencyType").value;
  let res = 0;

  switch (type) {
    case "USD":
      res = amt * 0.012;
      break;
    case "EUR":
      res = amt * 0.011;
      break;
    case "GBP":
      res = amt * 0.009;
      break;
  }

  document.getElementById("currencyResult").innerText =
    "Converted Amount: " + res.toFixed(2);
}

/* ===============================
   Unit Converter
================================ */
function convertUnit() {
  let val = Number(document.getElementById("unitValue").value);
  let type = document.getElementById("unitType").value;
  let res = 0;

  switch (type) {
    case "cm-m":
      res = val / 100;
      break;
    case "kg-g":
      res = val * 1000;
      break;
  }

  document.getElementById("unitResult").innerText =
    "Result: " + res;
}

/* ===============================
   Grade Checker
================================ */
function checkGrade() {
  let m = Number(document.getElementById("marks").value);
  let grade;

  switch (true) {
    case m >= 90:
      grade = "A";
      break;
    case m >= 75:
      grade = "B";
      break;
    case m >= 60:
      grade = "C";
      break;
    default:
      grade = "Fail";
  }

  document.getElementById("gradeResult").innerText =
    "Grade: " + grade;
}

/* ===============================
   Theme Switcher
================================ */
function changeTheme(mode) {
  switch (mode) {
    case "dark":
      document.body.classList.add("dark");
      break;
    case "light":
      document.body.classList.remove("dark");
      break;
  }
}

/* ===============================
   ⚡ Electricity Bill Calculator
   Units + Rate (Real World Logic)
================================ */
function calculateElectricityBill() {
  let units = Number(document.getElementById("electricUnits").value);
  let rate = Number(document.getElementById("unitRate").value);

  if (units <= 0 || rate <= 0) {
    document.getElementById("billResult").innerText =
      "Please enter valid units and rate";
    return;
  }

  let bill = units * rate;

  document.getElementById("billResult").innerText =
    "Total Electricity Bill: ₹" + bill.toFixed(2);
}

