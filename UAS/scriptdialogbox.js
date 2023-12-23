function showDialog(url) {
    // Buat dialog box
    var dialog = document.createElement("dialog");
    dialog.setAttribute("title", "Konfirmasi");
    dialog.setAttribute("style", "display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; background-color: #fff;");
  
    // Tambahkan konten dialog box
    var content = document.createElement("div");
    content.innerHTML = `Apakah Anda yakin ingin membuka halaman ${url}?`;
    dialog.appendChild(content);
  
    // Tambahkan tombol lanjut dan batal
    var button1 = document.createElement("button");
    button1.innerHTML = "Lanjut";
    button1.addEventListener("click", function() {
      // Tutup dialog box
      dialog.style.display = "none";
      // Pindah ke halaman yang dipilih
      window.location.href = url;
    });
    var button2 = document.createElement("button");
    button2.innerHTML = "Batal";
    button2.addEventListener("click", function() {
      // Tutup dialog box
      dialog.style.display = "none";
    });
    content.appendChild(button1);
    content.appendChild(button2);
  
    // Tampilkan dialog box
    document.body.appendChild(dialog);
    dialog.showModal();
  }
  
  // Tambahkan event listener ke setiap tombol
  document.getElementById("home").addEventListener("click", function() {
    showDialog("home.html");
  });
  document.getElementById("profil").addEventListener("click", function() {
    showDialog("profil.html");
  });
  document.getElementById("about").addEventListener("click", function() {
    showDialog("about.html");
  });
  document.getElementById("galery").addEventListener("click", function() {
    showDialog("galery.html");
  });
  document.getElementById("kontak").addEventListener("click", function() {
    showDialog("kontak.html");
  });
  