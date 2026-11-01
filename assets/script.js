const tombolPesan = document.getElementById("tombolPesan");
const pesan = document.getElementById("pesan");

tombolPesan.addEventListener("click", function () {
    pesan.textContent = "Berhasil! JavaScript sudah terhubung.";
});