/**
 * Fungsi untuk menyapa pengguna saat tombol diklik.
 * Fungsi ini mengambil waktu saat ini dan memberikan pesan yang sesuai.
 */
function sapaPengguna() {
    // Mengambil elemen tempat teks akan ditampilkan
    const elemenPesan = document.getElementById("pesanSapaan");

    // Mengambil jam saat ini dari sistem
    const jam = new Date().getHours();
    let salam = "";

    // Menentukan ucapan berdasarkan waktu
    if (jam >= 5 && jam < 12) {
        salam = "Selamat Pagi!";
    } else if (jam >= 12 && jam < 15) {
        salam = "Selamat Siang!";
    } else if (jam >= 15 && jam < 18) {
        salam = "Selamat Sore!";
    } else {
        salam = "Selamat Malam!";
    }

    // Menampilkan pesan ke halaman HTML
    if (elemenPesan) {
        elemenPesan.innerText = `${salam} Terima kasih telah berkunjung ke halaman Pelatihan TIK.`;
    }
}
