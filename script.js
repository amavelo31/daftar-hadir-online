// Ambil elemen dari HTML
const formPesan = document.getElementById('formPesan');
const papanPesan = document.getElementById('papanPesan');

// Fungsi untuk memuat pesan yang tersimpan saat halaman dibuka
function muatPesan() {
    papanPesan.innerHTML = '';
    const daftarPesan = JSON.parse(localStorage.getItem('pesanOnline')) || [];
    
    // Tampilkan dari yang paling baru di atas
    daftarPesan.reverse().forEach(item => {
        const div = document.createElement('div');
        div.className = 'kartu-pesan';
        div.innerHTML = `
            <strong>👤 ${item.nama}</strong>
            <p>${item.pesan}</p>
            <span>🕒 ${item.waktu}</span>
        `;
        papanPesan.appendChild(div);
    });
}

// Event saat tombol kirim ditekan
formPesan.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const namaInput = document.getElementById('nama');
    const pesanInput = document.getElementById('isiPesan');
    
    const nama = namaInput.value.trim();
    const pesan = pesanInput.value.trim();
    const waktu = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    
    if (nama !== "" && pesan !== "") {
        const dataBaru = { nama, pesan, waktu };
        
        // Ambil data lama, tambahkan data baru, lalu simpan lagi ke Local Storage
        const daftarPesan = JSON.parse(localStorage.getItem('pesanOnline')) || [];
        daftarPesan.push(dataBaru);
        localStorage.setItem('pesanOnline', JSON.stringify(daftarPesan));
        
        // Bersihkan input teks pesan saja (nama tetap terisi agar tidak repot mengetik ulang)
        pesanInput.value = "";
        
        // Perbarui tampilan papan pesan
        muatPesan();
    }
});

// Jalankan fungsi memuat pesan pertama kali halaman dibuka
muatPesan();