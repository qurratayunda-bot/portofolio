// Organization Data - Qurrata Ayyunda Prayogi
// This file contains all organization experience data

const organizationData = [
    {
        id: 1,
        organization: "IPM (Ikatan Pemuda Muhammadiyah)",
        role: "Unit Kesehatan",
        period: "Agustus 2019 - Januari 2022",
        location: "Surabaya, Jawa Timur",
        category: "ipm",
        duration: "2.5 Tahun",
        achievements: [
            "Anggota aktif Unit Kesehatan organisasi pemuda Muhammadiyah",
            "Berpartisipasi dalam kegiatan kesehatan sekolah dan masyarakat",
            "Mengembangkan kemampuan leadership dan kerja tim dalam organisasi",
            "Terlibat dalam program kesehatan remaja dan sosial"
        ],
        icon: "fas fa-users",
        color: "#3b82f6"
    },
    {
        id: 2,
        organization: "KSR (Korps Sukarela)",
        role: "Anggota",
        period: "September 2024 - Januari 2025",
        location: "Surabaya, Jawa Timur",
        category: "ksr",
        duration: "5 Bulan",
        achievements: [
            "Bergabung sebagai anggota Korps Sukarela di lingkungan kampus",
            "Mengikuti pelatihan dasar kesukarelawanan dan pertolongan pertama",
            "Berpartisipasi dalam kegiatan sosial dan kemanusiaan",
            "Mengembangkan jiwa sosial dan kepedulian terhadap sesama"
        ],
        icon: "fas fa-hands-helping",
        color: "#ef4444"
    },
    {
        id: 3,
        organization: "CyberChoir (Paduan Suara Universitas Dinamika Surabaya)",
        role: "Anggota",
        period: "September 2024 - Desember 2025",
        location: "Surabaya, Jawa Timur",
        category: "music",
        duration: "1.3 Tahun",
        achievements: [
            "Bergabung dengan paduan suara kampus sejak semester pertama",
            "Berpartisipasi dalam berbagai acara kampus dan publik",
            "Mengembangkan kemampuan musik dan kerja sama tim",
            "Menampilkan berbagai genre musik dalam pertunjukan"
        ],
        icon: "fas fa-music",
        color: "#8b5cf6"
    },
    {
        id: 4,
        organization: "KSR (Korps Sukarela)",
        role: "Sekertaris",
        period: "Februari 2025 - Januari 2026",
        location: "Surabaya, Jawa Timur",
        category: "ksr",
        duration: "1 Tahun",
        achievements: [
            "Dipromosikan menjadi Sekertaris Korps Sukarela",
            "Bertanggung jawab atas administrasi dan dokumentasi organisasi",
            "Mengkoordinasikan rapat dan menyusun laporan kegiatan",
            "Mengelola komunikasi internal dan eksternal organisasi",
            "Membantu perencanaan dan pelaksanaan program kerja"
        ],
        icon: "fas fa-file-alt",
        color: "#10b981"
    },
    {
        id: 5,
        organization: "HIMA (Himpunan Mahasiswa)",
        role: "Anggota Kelas Kecil",
        period: "Februari 2025 - Desember 2026",
        location: "Surabaya, Jawa Timur",
        category: "hima",
        duration: "1.8 Tahun",
        achievements: [
            "Bergabung dengan Himpunan Mahasiswa Program Studi",
            "Anggota aktif dalam divisi atau kelas kecil tertentu",
            "Berpartisipasi dalam kegiatan kemahasiswaan dan pengembangan soft skills",
            "Membantu pelaksanaan event dan program kerja himpunan"
        ],
        icon: "fas fa-user-graduate",
        color: "#f59e0b"
    },
    {
        id: 6,
        organization: "KSR (Korps Sukarela)",
        role: "Anggota PSDM",
        period: "Januari 2026 - Desember 2026",
        location: "Surabaya, Jawa Timur",
        category: "ksr",
        duration: "1 Tahun",
        achievements: [
            "Bergabung dengan divisi Pengembangan Sumber Daya Manusia (PSDM)",
            "Terlibat dalam rekrutmen dan pengembangan anggota baru",
            "Membantu dalam pelatihan dan pengembangan kapasitas anggota",
            "Berpartisipasi dalam perencanaan program pengembangan organisasi",
            "Mengelola database anggota dan kegiatan pengembangan"
        ],
        icon: "fas fa-chart-line",
        color: "#ec4899"
    },
    {
        id: 7,
        organization: "CyberChoir (Paduan Suara Universitas Dinamika Surabaya)",
        role: "Anggota",
        period: "Januari 2026 - Desember 2026",
        location: "Surabaya, Jawa Timur",
        category: "music",
        duration: "1 Tahun",
        achievements: [
            "Lanjutan keanggotaan paduan suara kampus",
            "Berpartisipasi dalam lebih banyak pertunjukan dan acara",
            "Mengambil peran lebih aktif dalam persiapan pertunjukan",
            "Membantu melatih anggota baru paduan suara"
        ],
        icon: "fas fa-microphone-alt",
        color: "#6366f1"
    },
    {
        id: 8,
        organization: "HIMA (Himpunan Mahasiswa)",
        role: "Anggota Reset dan Teknologi",
        period: "Januari 2026 - Januari 2026",
        location: "Surabaya, Jawa Timur",
        category: "hima",
        duration: "Proyek Khusus",
        achievements: [
            "Bergabung dengan divisi Reset dan Teknologi HIMA",
            "Terlibat dalam proyek-proyek teknologi dan inovasi",
            "Membantu dalam pengembangan sistem dan tools organisasi",
            "Berpartisipasi dalam kegiatan yang berhubungan dengan teknologi informasi",
            "Menerapkan pengetahuan IT untuk mendukung kegiatan organisasi"
        ],
        icon: "fas fa-laptop-code",
        color: "#059669"
    }
];

// Filter categories for organizations
const organizationCategories = [
    { id: 'all', name: 'Semua', count: organizationData.length, icon: 'fas fa-list' },
    { id: 'ksr', name: 'KSR', count: organizationData.filter(item => item.category === 'ksr').length, icon: 'fas fa-hands-helping' },
    { id: 'hima', name: 'HIMA', count: organizationData.filter(item => item.category === 'hima').length, icon: 'fas fa-user-graduate' },
    { id: 'music', name: 'Musik', count: organizationData.filter(item => item.category === 'music').length, icon: 'fas fa-music' },
    { id: 'ipm', name: 'IPM', count: organizationData.filter(item => item.category === 'ipm').length, icon: 'fas fa-users' }
];

// Calculate duration for each item
function calculateDuration(startDateStr, endDateStr) {
    const monthNames = {
        'januari': 0, 'februari': 1, 'maret': 2, 'april': 3, 'mei': 4, 'juni': 5,
        'juli': 6, 'agustus': 7, 'september': 8, 'oktober': 9, 'november': 10, 'desember': 11
    };
    
    function parseDate(dateStr) {
        const parts = dateStr.trim().toLowerCase().split(' ');
        const month = monthNames[parts[0]];
        const year = parseInt(parts[1]);
        return new Date(year, month);
    }
    
    const startDate = parseDate(startDateStr);
    const endDate = parseDate(endDateStr);
    
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                   (endDate.getMonth() - startDate.getMonth());
    
    if (months >= 12) {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        if (remainingMonths > 0) {
            return `${years}.${remainingMonths} Tahun`;
        }
        return `${years} Tahun`;
    } else {
        return `${months} Bulan`;
    }
}

// Add calculated durations to data
organizationData.forEach(item => {
    if (item.period.includes('-')) {
        const [start, end] = item.period.split('-').map(s => s.trim());
        item.duration = calculateDuration(start, end);
    }
});

// Export functions for dynamic rendering
function renderOrganizationTimeline(container) {
    if (!container) return;
    
    // Sort by date (oldest first)
    const sortedData = [...organizationData].sort((a, b) => {
        const dateA = parseOrganizationDate(a.period);
        const dateB = parseOrganizationDate(b.period);
        return dateA - dateB;
    });
    
    container.innerHTML = sortedData.map(item => `
        <div class="org-timeline-item" data-category="${item.category}" data-id="${item.id}">
            <div class="org-timeline-date">
                <span class="org-date">${item.period}</span>
                <span class="org-duration">${item.duration}</span>
            </div>
            <div class="org-timeline-content">
                <div class="org-header">
                    <h3>${item.organization}</h3>
                    <span class="org-role">${item.role}</span>
                </div>
                <p class="org-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
                <div class="org-achievements">
                    <h4>Pencapaian & Kontribusi:</h4>
                    <ul>
                        ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

function renderOrganizationFilters(container) {
    if (!container) return;
    
    container.innerHTML = organizationCategories.map(category => `
        <button class="org-filter-btn ${category.id === 'all' ? 'active' : ''}" 
                data-filter="${category.id}"
                data-count="${category.count}">
            <i class="${category.icon}"></i>
            ${category.name} (${category.count})
        </button>
    `).join('');
}

function parseOrganizationDate(dateText) {
    const monthNames = {
        'januari': 0, 'februari': 1, 'maret': 2, 'april': 3, 'mei': 4, 'juni': 5,
        'juli': 6, 'agustus': 7, 'september': 8, 'oktober': 9, 'november': 10, 'desember': 11
    };
    
    // Get start date from period string
    const startDateStr = dateText.includes('-') 
        ? dateText.split('-')[0].trim() 
        : dateText.trim();
    
    const parts = startDateStr.toLowerCase().split(' ');
    const month = monthNames[parts[0]];
    const year = parseInt(parts[1]);
    
    return new Date(year, month);
}

// Export the data and functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        organizationData,
        organizationCategories,
        renderOrganizationTimeline,
        renderOrganizationFilters,
        calculateDuration
    };
}

// Auto-initialize if loaded directly
if (typeof window !== 'undefined') {
    window.OrganizationData = {
        organizationData,
        organizationCategories,
        renderOrganizationTimeline,
        renderOrganizationFilters,
        calculateDuration
    };
    
    console.log('OrganizationData loaded:', window.OrganizationData);
}