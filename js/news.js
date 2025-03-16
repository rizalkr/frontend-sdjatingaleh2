$(document).ready(function(){
  const apiNews = 'http://127.0.0.1:3000/api/news';
  const $newsContainer = $('#newsContainer');

  function fetchNews(){
    $.ajax({
      url: apiNews,
      method: 'GET',
      success: function(data){
        $newsContainer.empty();
        if (data && data.length) {
          data.forEach((newsItem, index) => {
            // Menggunakan struktur yang sama dengan style berita yang ada
            let card = `
              <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="${(index % 2 === 0) ? '100' : '200'}">
                <div class="media-h d-flex h-100">
                  <figure>
                    <img src="${newsItem.image}" alt="Image">
                  </figure>
                  <div class="media-h-body">
                    <h2 class="mb-3"><a href="#">${newsItem.title}</a></h2>
                    <div class="meta">
                      <span class="icon-calendar mr-2"></span><span>${newsItem.createdAt}</span>
                      <span class="icon-person mr-2"></span>${newsItem.author}
                    </div>
                    <p>${newsItem.content}</p>
                  </div>
                </div>
              </div>
            `;
            $newsContainer.append(card);
          });
        } else {
          $newsContainer.html('<div class="col-12 text-center">Tidak ada berita.</div>');
        }
      },
      error: function(error){
        console.error("Error fetching news:", error);
        console.log("Error details:", error.responseText);
        $newsContainer.html('<div class="col-12 text-center">Error fetching data.</div>');
      }
    });
  }

  fetchNews();
});