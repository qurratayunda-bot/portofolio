// PDF Content Data - Qurrata Ayyunda Prayogi
// This file contains all volunteer experience data from the PDF

const volunteerData = [
    {
        id: 1,
        title: "IPM Unit Kesehatan",
        date: "Agustus 2019 - Januari 2022",
        location: "Surabaya",
        category: "health",
        details: [
            "Mengikuti kegiatan organisasi, termasuk pengajian rutin setiap Jumat yang dihadiri oleh ±900 siswa, guru, dan staf sekolah",
            "Membentuk tim UKS (Unit Kesehatan Sekolah) untuk memberikan pertolongan darurat dalam kegiatan organisasi",
            "Berperan dalam acara peringatan Hari Kemerdekaan 17 Agustus, membantu persiapan acara dan konsumsi bagi ±400 peserta"
        ],
        icon: "fas fa-heartbeat",
        color: "#ef4444"
    },
    {
        id: 2,
        title: "Paskib Festival - Tim Kesehatan",
        date: "November 2024",
        location: "Surabaya",
        category: "health",
        details: [
            "Bertugas sebagai tim kesehatan dalam kompetisi baris-berbaris tingkat SMA/SMK yang diikuti oleh 72 sekolah",
            "Menyediakan ruang istirahat, oksigen, tandu, dan obat-obatan bagi peserta",
            "Menangani 13 peserta yang pingsan, memberikan pertolongan pertama dengan oksigen, minyak kayu putih, dan air putih"
        ],
        icon: "fas fa-medkit",
        color: "#3b82f6"
    },
    {
        id: 3,
        title: "Wisuda Angkatan 2021 - Paduan Suara Alto",
        date: "November 2024",
        location: "Universitas Dinamika Surabaya",
        category: "music",
        details: [
            "Menjadi anggota paduan suara alto pada wisuda Universitas Dinamika Surabaya, dihadiri oleh +900 mahasiswa, dosen, dan rektorat",
            "Menyanyikan 10 lagu dengan kompensasi Rp 50.000 serta makan"
        ],
        icon: "fas fa-music",
        color: "#8b5cf6"
    },
    {
        id: 4,
        title: "Diklat Patriot Paskibraka",
        date: "Desember 2024",
        location: "Surabaya",
        category: "health",
        details: [
            "Bertanggung jawab dalam penyediaan obat-obatan, tandu, dan oksigen bagi peserta",
            "Menangani peserta yang mengalami gangguan kesehatan akibat cuaca dingin dan minimnya pakaian tebal",
            "Mendapatkan kompensasi Rp 25.000 serta fasilitas makan"
        ],
        icon: "fas fa-first-aid",
        color: "#10b981"
    },
    {
        id: 5,
        title: "Workshop Desain Web 2025",
        date: "Juli 2025",
        location: "Surabaya",
        category: "tech event",
        details: [
            "Menjadi host acara pada pembukaan workshop dan memperkenalkan susunan acara kepada seluruh peserta",
            "Mendampingi peserta dari SMK Penerbangan (50 siswa/siswi + 1 pendamping) sepanjang kegiatan berlangsung",
            "Mengatur lokasi, koordinasi, dan memastikan peserta selalu berada pada tempat dan jadwal yang tepat",
            "Membantu peserta agar tidak tertinggal materi; mendampingi langsung sesi praktik pemrograman web di laboratorium kampus",
            "Total panitia aktif HIMA yang bertugas: 8 orang, bersama dengan 1 Kaprodi dan 2 dosen, mendukung kelancaran acara"
        ],
        icon: "fas fa-laptop-code",
        color: "#f59e0b"
    },
    {
        id: 6,
        title: "Pengeditan Video Kegiatan UAS IoT",
        date: "Juli 2025",
        location: "Surabaya",
        category: "tech",
        details: [
            "Mengedit video dokumentasi kegiatan UAS Pengantar Internet of Things (IoT) menggunakan aplikasi CapCut",
            "Bertugas menyusun alur visual & audio agar video menjadi informatif dan menarik, termasuk menambahkan transisi, teks, dan efek sederhana",
            "Memastikan video merekap seluruh rangkaian kegiatan praktikum dan presentasi IoT yang dilakukan oleh peserta",
            "Menyusun output video akhirnya dalam format siap tayang (resolusi sesuai panduan sekolah atau kampus)"
        ],
        icon: "fas fa-video",
        color: "#ec4899"
    },
    {
        id: 7,
        title: "Paduan Suara Upacara Kemerdekaan",
        date: "Agustus 2025",
        location: "Universitas Dinamika Surabaya",
        category: "music",
        details: [
            "Menjadi anggota paduan suara pada upacara peringatan Hari Kemerdekaan 17 Agustus 2025 di Universitas Dinamika Surabaya",
            "Diikuti oleh ±300 mahasiswa baru maupun lama, dosen, serta jajaran rektorat",
            "Membawakan lagu Indonesia Raya dan Mengheningkan Cipta bersama tim paduan suara sebagai bagian dari prosesi upacara"
        ],
        icon: "fas fa-flag",
        color: "#dc2626"
    },
    {
        id: 8,
        title: "FITCOM 3.0 - Panitia",
        date: "Oktober 2025",
        location: "Fakultas Teknologi Informasi Universitas Dinamika",
        category: "tech event",
        details: [
            "Bertugas sebagai panitia pada kegiatan nasional Fakultas Teknologi Informasi yang dihadiri oleh ±69 sekolah (siswa/siswi dan guru pendamping)",
            "Sebelum acara: bertanggung jawab di sie data dan informasi, mencari serta memverifikasi data dan informasi sekolah peserta secara valid dan lengkap",
            "Saat acara: diperbantukan pada sie kesekretariatan, bertugas membuat dan mencetak name tag peserta, membantu pengecekan kehadiran di area registrasi",
            "Mendukung kelancaran registrasi dan administrasi kegiatan hingga acara berjalan tertib dan tepat waktu"
        ],
        icon: "fas fa-trophy",
        color: "#6366f1"
    },
    {
        id: 9,
        title: "Webinar 'Keamanan Siber untuk Remaja'",
        date: "Oktober 2025",
        location: "Online via Google Meet",
        category: "tech event",
        details: [
            "Menjadi panitia dalam acara webinar online dengan tema 'Bagaimana Menjadi Cerdas dan Aman di Era Digital'",
            "Acara dihadiri oleh ±50 peserta yang terdiri dari mahasiswa, siswa/siswi, orang tua, serta dosen",
            "Bertugas sebagai tim follow-up doorprize, menghubungi pemenang untuk konfirmasi data pengiriman hadiah",
            "Membuat dan mengirim pesan formal kepada pemenang untuk verifikasi nomor rekening, e-wallet, atau nomor pulsa",
            "Bertugas juga sebagai penulis notulen acara, mencatat jalannya kegiatan, materi dari narasumber, dan hasil sesi tanya jawab"
        ],
        icon: "fas fa-shield-alt",
        color: "#059669"
    },
    {
        id: 10,
        title: "Paduan Suara Upacara Hari Sumpah Pemuda",
        date: "Oktober 2025",
        location: "Universitas Dinamika Surabaya",
        category: "music",
        details: [
            "Upacara dihadiri oleh ±300 peserta yang terdiri dari rektor, wakil rektor, kaprodi, dosen, serta seluruh staf universitas",
            "Membawakan lagu Indonesia Raya, Mengheningkan Cipta, Satu Nusa Satu Bangsa dan Bangun Pemudi Pemuda",
            "Sebagai bagian dari tim paduan suara dalam prosesi upacara"
        ],
        icon: "fas fa-users",
        color: "#7c3aed"
    },
    {
        id: 11,
        title: "Kuliah Tamu Prodi D3 Sistem Informasi",
        date: "Desember 2025",
        location: "Universitas Dinamika Surabaya",
        category: "tech event",
        details: [
            "Kuliah tamu dengan tema 'Quality Management (QM) di SAP: Peran Pentingnya dalam Industri Manufaktur dan Energi'",
            "Dihadiri oleh kurang lebih 50 peserta yang terdiri dari mahasiswa, dosen, dan Ketua Program Studi D3 Sistem Informasi",
            "Bertugas membuat Google Form pendaftaran, menjadi penerima tamu, operator acara",
            "Membantu Ketua Program Studi dalam proses penyerahan penghargaan kepada pemateri"
        ],
        icon: "fas fa-chalkboard-teacher",
        color: "#0ea5e9"
    }
];

// Filter categories
const volunteerCategories = [
    { id: 'all', name: 'Semua', count: volunteerData.length },
    { id: 'health', name: 'Kesehatan', count: volunteerData.filter(item => item.category.includes('health')).length },
    { id: 'music', name: 'Musik/Paduan Suara', count: volunteerData.filter(item => item.category.includes('music')).length },
    { id: 'event', name: 'Panitia Acara', count: volunteerData.filter(item => item.category.includes('event')).length },
    { id: 'tech', name: 'Teknologi', count: volunteerData.filter(item => item.category.includes('tech')).length }
];

// Export functions for dynamic rendering
function renderVolunteerItems(container) {
    if (!container) return;
    
    container.innerHTML = volunteerData.map(item => `
        <div class="volunteer-item" data-category="${item.category}" data-id="${item.id}">
            <div class="volunteer-header">
                <h3>${item.title}</h3>
                <span class="volunteer-date">${item.date}</span>
            </div>
            <p class="volunteer-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
            <ul class="volunteer-details">
                ${item.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderFilterButtons(container) {
    if (!container) return;
    
    container.innerHTML = volunteerCategories.map(category => `
        <button class="btn-filter ${category.id === 'all' ? 'active' : ''}" 
                data-filter="${category.id}"
                data-count="${category.count}">
            ${category.name} (${category.count})
        </button>
    `).join('');
}

// Export the data and functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        volunteerData,
        volunteerCategories,
        renderVolunteerItems,
        renderFilterButtons
    };
}

// Auto-initialize if loaded directly
if (typeof window !== 'undefined') {
    window.VolunteerData = {
        volunteerData,
        volunteerCategories,
        renderVolunteerItems,
        renderFilterButtons
    };
    
    // You can use this in your main JavaScript file like:
    // VolunteerData.renderVolunteerItems(document.querySelector('.volunteer-grid'));
    // VolunteerData.renderFilterButtons(document.querySelector('.volunteer-controls'));
}