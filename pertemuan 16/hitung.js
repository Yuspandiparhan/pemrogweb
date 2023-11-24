const bil1 = document.getElementById("bil1");
const bil2 = document.getElementById("bil2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

const hitung = () => {
  const a = parseInt(bil1.value);
  const b = parseInt(bil2.value);
  const c = operator.value;

  switch (c) {
    case "+":
      result.innerHTML = a + b;
      break;
    case "-":
      result.innerHTML = a - b;
      break;
    case "*":
      result.innerHTML = a * b;
      break;
    case "/":
      result.innerHTML = a / b;
      break;
    default:
      result.innerHTML = "Operator tidak valid";
  }
};

result.innerHTML = "0";
bil1.addEventListener("keyup", hitung);
bil2.addEventListener("keyup", hitung);
operator.addEventListener("change", hitung);
