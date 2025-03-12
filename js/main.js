import { getTeachers } from './apiService.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const teachers = await getTeachers();
    const container = document.getElementById('staffContainer');
    if (container && teachers.length > 0) {
      container.innerHTML = teachers.map((teacher, idx) => {
        // Menetapkan image dengan hardcode berdasarkan index
        let imgSrc;
        if (idx === 0) {
          imgSrc = "images/staff_1.jpg";
        } else if (idx === 1) {
          imgSrc = "images/staff_2.jpg";
        } else if (idx === 2) {
          imgSrc = "images/staff_3.jpg";
        } else {
          imgSrc = "images/default_staff.jpg"; // fallback image
        }

        return `
          <div class="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="${idx * 100}">
            <div class="staff text-center">
              <div class="mb-4"><img src="${imgSrc}" alt="Image" class="img-fluid"></div>
              <div class="staff-body">
                <h3 class="staff-name">${teacher.name}</h3>
                <span class="d-block position mb-4">${teacher.subject}</span>
                <p class="mb-4">${teacher.email}</p>
                <div class="social">
                  <a href="#" class="mx-2"><span class="icon-facebook"></span></a>
                  <a href="#" class="mx-2"><span class="icon-twitter"></span></a>
                  <a href="#" class="mx-2"><span class="icon-linkedin"></span></a>
                </div>
              </div>
            </div>
          </div>`;
      }).join('');
    }
  } catch (error) {
    console.error("Error rendering teacher data:", error);
  }
});