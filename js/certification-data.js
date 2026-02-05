// Certification & Training Data - Qurrata Ayyunda Prayogi
// This file contains all certification and training data

const certificationData = [
    {
        id: 1,
        title: "Pemrosesan Angka",
        issuer: "Pendidikan Trisula",
        period: "Juli 2010 - Mei 2016",
        location: "Surabaya, Jawa Timur",
        category: "tech",
        type: "Sertifikat",
        details: [
            "Menguasai HTML dasar, PowerPoint dan MS Word dasar",
            "Membuat 1 tugas akhir wisuda berupa pembuatan manajemen di PowerPoint"
        ],
        icon: "fas fa-school",
        color: "#3b82f6"
    },
    {
        id: 2,
        title: "Bahasa",
        issuer: "Rumah Bahasa Surabaya",
        period: "September 2023 - Sekarang",
        location: "Surabaya, Jawa Timur",
        category: "language",
        type: "Kursus",
        details: [
            "Menguasai dasar Hangul, dasar Mandarin, dasar Inggris dan Belanda"
        ],
        icon: "fas fa-language",
        color: "#ef4444"
    },
    {
        id: 3,
        title: "Rekayasa Perangkat Lunak",
        issuer: "Rumah Gemilang Indonesia Surabaya Branch",
        period: "Februari 2024 - Juli 2024",
        location: "Surabaya, Jawa Timur",
        category: "tech",
        type: "Sertifikat",
        details: [
            "Menguasai coding dasar bahasa pemrograman HTML, CSS dasar, dan Javascript dasar",
            "Tugas akhir membuat website Pengaduan Layanan Rumah Sakit dengan menggunakan sistem MySQL"
        ],
        icon: "fas fa-laptop-code",
        color: "#10b981"
    },
    {
        id: 4,
        title: "Cara Menskalakan Bisnis Startup",
        issuer: "Saya cakap.com",
        period: "September 2023 - September 2023",
        location: "",
        category: "business",
        type: "Webinar",
        details: [
            "Pembelajaran dasar bisnis startup"
        ],
        icon: "fas fa-chart-line",
        color: "#f59e0b"
    },
    {
        id: 5,
        title: "Seminar Bekerja di Industri Konstruksi Jepang",
        issuer: "JAC",
        period: "Oktober 2023 - Oktober 2023",
        location: "Surabaya, Jawa Timur",
        category: "business",
        type: "Seminar",
        details: [
            "Pelajari tentang bisnis startup dasar",
            "Pembelajaran dasar bisnis startup"
        ],
        icon: "fas fa-industry",
        color: "#8b5cf6"
    },
    {
        id: 6,
        title: "Self & Development",
        issuer: "",
        period: "Juni 2024 - Juni 2024",
        location: "",
        category: "workshop",
        type: "Pelatihan",
        details: [
            "Pelajari tentang dasar - dasar development"
        ],
        icon: "fas fa-user-graduate",
        color: "#ec4899"
    },
    {
        id: 7,
        title: "Dynamic Class bersama Hanung Bramantyo",
        issuer: "Universitas Dinamika",
        period: "Agustus 2025",
        location: "Surabaya, Jawa Timur",
        category: "workshop",
        type: "Workshop",
        details: [
            "Mengikuti kelas inspiratif tentang industri film dan televisi, produksi kreatif, serta strategi komunikasi visual bersama sutradara Hanung Bramantyo"
        ],
        icon: "fas fa-film",
        color: "#6366f1"
    },
    {
        id: 8,
        title: "Webinar Accounting 2025 – AI-Powered Accounting: Masa Depan Profesi Akuntan di Era Digital",
        issuer: "Universitas Dinamika",
        period: "September 2025",
        location: "Surabaya, Jawa Timur",
        category: "tech business",
        type: "Webinar",
        details: [
            "Mengikuti webinar yang membahas transformasi profesi akuntan melalui pemanfaatan AI dalam era digital"
        ],
        icon: "fas fa-robot",
        color: "#059669"
    },
    {
        id: 9,
        title: "Seminar Karir",
        issuer: "Universitas Dinamika",
        period: "Oktober 2025",
        location: "Surabaya, Jawa Timur",
        category: "workshop",
        type: "Seminar",
        details: [
            "Bertugas sebagai tim tamu dalam kegiatan Seminar Karir periode Oktober 2025 yang dihadiri oleh lebih dari 200 mahasiswa angkatan 2018–2022",
            "Menyambut peserta seminar, membantu pengisian daftar hadir, serta memastikan jalannya kegiatan sesuai jadwal",
            "Berperan dalam proses akhir kegiatan dengan membantu pembagian kartu kelulusan kepada para peserta"
        ],
        icon: "fas fa-briefcase",
        color: "#0ea5e9"
    },
    {
        id: 10,
        title: "TECHCOMFEST 2026 — Finalis Web Application Competition",
        issuer: "Universitas Politeknik Negeri Semarang",
        period: "Januari 2026",
        location: "Semarang, Jawa Tengah",
        category: "tech",
        type: "Finalis",
        highlight: true,
        details: [
            "Mengembangkan platform edukasi kesehatan interaktif berbasis web dan mobile dengan tema 'Platform Edukasi Kesehatan Interaktif untuk Anak SD' yang berfokus pada pengenalan kesehatan pernapasan bagi anak usia 6–12 tahun",
            "Menyediakan materi visual, modul edukasi PDF, game interaktif, serta sertifikat digital PDF sebagai media pembelajaran dan evaluasi",
            "Mengimplementasikan antarmuka ramah anak, animasi edukatif, dan chatbot AI simulasi menggunakan HTML, CSS, JavaScript, dan Bootstrap"
        ],
        icon: "fas fa-trophy",
        color: "#dc2626"
    }
];

// Filter categories for certifications
const certificationCategories = [
    { id: 'all', name: 'Semua', count: certificationData.length, icon: 'fas fa-list' },
    { id: 'tech', name: 'Teknologi', count: certificationData.filter(item => item.category.includes('tech')).length, icon: 'fas fa-laptop-code' },
    { id: 'language', name: 'Bahasa', count: certificationData.filter(item => item.category.includes('language')).length, icon: 'fas fa-language' },
    { id: 'business', name: 'Bisnis', count: certificationData.filter(item => item.category.includes('business')).length, icon: 'fas fa-chart-line' },
    { id: 'workshop', name: 'Workshop', count: certificationData.filter(item => item.category.includes('workshop')).length, icon: 'fas fa-chalkboard-teacher' }
];

// Parse date for sorting
function parseCertificationDate(period) {
    if (!period) return new Date(0);
    
    // Extract start date from period
    let dateStr = period;
    if (period.includes('-')) {
        dateStr = period.split('-')[0].trim();
    }
    
    const monthNames = {
        'januari': 0, 'februari': 1, 'maret': 2, 'april': 3, 'mei': 4, 'juni': 5,
        'juli': 6, 'agustus': 7, 'september': 8, 'oktober': 9, 'november': 10, 'desember': 11
    };
    
    const parts = dateStr.toLowerCase().split(' ');
    let month = 0;
    let year = new Date().getFullYear();
    
    for (const part of parts) {
        if (monthNames.hasOwnProperty(part)) {
            month = monthNames[part];
        } else if (!isNaN(parseInt(part)) && part.length === 4) {
            year = parseInt(part);
        }
    }
    
    return new Date(year, month);
}

// Sort certifications by date (newest first)
const sortedCertifications = [...certificationData].sort((a, b) => {
    return parseCertificationDate(b.period) - parseCertificationDate(a.period);
});

// Export functions for dynamic rendering
function renderCertifications(container) {
    if (!container) return;
    
    container.innerHTML = sortedCertifications.map(cert => `
        <div class="certification-item ${cert.highlight ? 'highlight' : ''}" data-category="${cert.category}" data-id="${cert.id}">
            <div class="certification-header">
                <h3>${cert.title}</h3>
                <span class="certification-badge ${cert.highlight ? 'highlight-badge' : ''}">${cert.type}</span>
            </div>
            ${cert.issuer ? `<p class="certification-issuer"><i class="${cert.icon}"></i> ${cert.issuer}</p>` : ''}
            <p class="certification-period"><i class="far fa-calendar"></i> ${cert.period}</p>
            ${cert.location ? `<p class="certification-location"><i class="fas fa-map-marker-alt"></i> ${cert.location}</p>` : ''}
            <div class="certification-details">
                ${cert.details.map(detail => `<p>${detail}</p>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderCertificationFilters(container) {
    if (!container) return;
    
    container.innerHTML = certificationCategories.map(category => `
        <button class="cert-filter-btn ${category.id === 'all' ? 'active' : ''}" 
                data-filter="${category.id}"
                data-count="${category.count}">
            <i class="${category.icon}"></i>
            ${category.name} (${category.count})
        </button>
    `).join('');
}

// Export the data and functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        certificationData,
        certificationCategories,
        renderCertifications,
        renderCertificationFilters,
        parseCertificationDate
    };
}

// Auto-initialize if loaded directly
if (typeof window !== 'undefined') {
    window.CertificationData = {
        certificationData,
        certificationCategories,
        renderCertifications,
        renderCertificationFilters,
        parseCertificationDate
    };
    
    console.log('CertificationData loaded:', window.CertificationData);
}