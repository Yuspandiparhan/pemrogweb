const atas = document.querySelector("input[name='atas']");
const bawah = document.querySelector("input[name='bawah']");
const tinggi = document.querySelector("input[name='tinggi']");
const luas = document.querySelector("#luas");

function hitungLuas() {
  const a = parseInt(atas.value);
  const b = parseInt(bawah.value);
  const h = parseInt(tinggi.value);

  const luasTrapesium = (a + b) * h / 2;

  luas.textContent = luasTrapesium;
}

atas.addEventListener("input", hitungLuas);
bawah.addEventListener("input", hitungLuas);
tinggi.addEventListener("input", hitungLuas);
