function kalkulator() {
    // Buat variabel untuk input
    let a = prompt("Masukkan angka pertama: ");
    let b = prompt("Masukkan angka kedua: ");
  
    // Hitung hasil
    let hasil = a + b;
  
    // Tampilkan hasil
    document.querySelector(".hasil").innerHTML = hasil;
  }
  
  function luasTrapesium() {
    // Buat variabel untuk input
    let a = prompt("Masukkan alas pertama: ");
    let b = prompt("Masukkan alas kedua: ");
    let t = prompt("Masukkan tinggi trapesium: ");
  
    // Hitung hasil
    let hasil = (a + b) * t / 2;
  
    // Tampilkan hasil
    document.querySelector(".hasil").innerHTML = hasil;
  }
  
  function deretBilangan() {
    // Buat variabel untuk input
    let n = prompt("Masukkan jumlah bilangan: ");
    let a = prompt("Masukkan bilangan pertama: ");
  
    // Hitung deret
    let deret = [];
    for (let i = 0; i < n; i++) {
      deret.push(a + i);
    }
  
    // Tampilkan deret
    document.querySelector(".hasil").innerHTML = deret.join(", ");
  }
  
  // Event listener untuk menu
  document.querySelector(".menu li a").addEventListener("click", function(event) {
    // Tentukan pilihan
    let pilihan = event.target.textContent;
  
    // Jalankan fungsi sesuai pilihan
    switch (pilihan) {
      case "[1] Menghitung Kalkulator":
        kalkulator();
        break;
      case "[2] Menghitung Luas Trapesium":
        luasTrapesium();
        break;
      case "[3] Menghitung Deret Pilihan Anda :…":
        deretBilangan();
        break;
    }
  });
  