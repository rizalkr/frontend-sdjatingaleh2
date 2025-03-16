$(document).ready(function(){
  const apiBase = 'http://127.0.0.1:3000/api/students';
  const $tableBody = $('#studentsTable tbody');

  function fetchStudents(searchName = "") {
    let endpoint = searchName.trim() !== "" 
                   ? `${apiBase}/search?name=${encodeURIComponent(searchName)}`
                   : apiBase;
    $.ajax({
      url: endpoint,
      method: 'GET',
      success: function(data) {
        $tableBody.empty();
        if (data && data.length) {
          data.forEach((student, index) => {
            let row = `<tr>
              <td>${index + 1}</td>
              <td>${student.name}</td>
              <td>${student.age}</td>
              <td>${student.class}</td>
            </tr>`;
            $tableBody.append(row);
          });
        } else {
          $tableBody.append('<tr><td colspan="4" class="text-center">Tidak ada data murid.</td></tr>');
        }
      },
      error: function(error) {
        console.error("Error fetching students:", error);
        console.log("Error details:", error.responseText);
        $tableBody.html('<tr><td colspan="4" class="text-center">Error fetching data.</td></tr>');
      }
    });
  }

  // Initial fetch tanpa search term
  fetchStudents();

  // Fetch students ketika mengetik di search input
  $('#searchInput').on('keyup', function(){
    let query = $(this).val();
    fetchStudents(query);
  });
});