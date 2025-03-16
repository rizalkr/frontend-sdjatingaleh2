document.addEventListener('DOMContentLoaded', async () => {
  // Simulate fetching facility data from an API endpoint.
  // Replace the static data below with an API call if needed.
  const facilities = [
    {
      name: "Perpustakaan",
      description: "Fasilitas perpustakaan dengan koleksi buku yang lengkap dan ruang baca yang nyaman.",
      image: ""
    },
    {
      name: "Lapangan",
      description: "Lapangan olahraga yang luas untuk kegiatan ekstrakurikuler dan olahraga.",
      image: ""
    },
    {
      name: "Masjid",
      description: "Masjid sekolah untuk ibadah dan kegiatan keagamaan siswa dan staf.",
      image: ""
    },
    {
      name: "Kamar Mandi",
      description: "Fasilitas kamar mandi yang bersih dan nyaman untuk menunjang kebersihan siswa.",
      image: "" // Image not available
    }
  ];

  // Placeholder image jika image tidak tersedia.
  const defaultPlaceholder = "../images/placeholder.jpeg";

  const container = document.getElementById('facilityContainer');
  if (container) {
    container.innerHTML = facilities
      .map((facility, idx) => {
        const imageSrc = facility.image ? facility.image : defaultPlaceholder;
        return `
          <div class="col-12 col-sm-6 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="${idx * 100}">
            <div class="facility-card p-3 border rounded">
              <img src="${imageSrc}" alt="${facility.name}" class="img-fluid mb-3">
              <h3 class="facility-name h5">${facility.name}</h3>
              <p class="facility-desc small text-muted">${facility.description}</p>
            </div>
          </div>
        `;
      })
      .join('');
  }
});