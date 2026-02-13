function hideAll() {
  document.querySelectorAll('.card').forEach(card => card.style.display = "none");
}

function selectFeature() {
  hideAll();
  let feature = document.getElementById("feature").value;

  switch(feature) {
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
    case "theme":
      document.getElementById("theme").style.display = "block";
      break;
  }
}

function calculate() {
  let a = Number(num1.value);
  let b = Number(num2.value);
  let op = operator.value;
  let result;

  switch(op) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = b !== 0 ? a / b : "Error"; break;
  }
  calcResult.innerText = "Result: " + result;
}

function convertCurrency() {
  let amt = amount.value;
  let type = currencyType.value;
  let res;

  switch(type) {
    case "USD": res = amt * 0.012; break;
    case "EUR": res = amt * 0.011; break;
    case "GBP": res = amt * 0.009; break;
  }
  currencyResult.innerText = "Converted: " + res.toFixed(2);
}

function convertUnit() {
  let val = unitValue.value;
  let type = unitType.value;
  let res;

  switch(type) {
    case "cm-m": res = val / 100; break;
    case "kg-g": res = val * 1000; break;
  }
  unitResult.innerText = "Result: " + res;
}

function checkGrade() {
  let m = marks.value;
  let grade;

  switch(true) {
    case m >= 90: grade = "A"; break;
    case m >= 75: grade = "B"; break;
    case m >= 60: grade = "C"; break;
    default: grade = "Fail";
  }
  gradeResult.innerText = "Grade: " + grade;
}

function changeTheme(mode) {
  switch(mode) {
    case "dark":
      document.body.classList.add("dark");
      break;
    case "light":
      document.body.classList.remove("dark");
      break;
  }
}




