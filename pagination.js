document.addEventListener("DOMContentLoaded", function() {
  const firstGroup = document.querySelector('.first-images-group');
  const secondGroup = document.querySelector('.second-images-group');
  const thirdGroup = document.querySelector('.third-images-group');
  const fourthGroup = document.querySelector('.fourth-images-group');
  const paginationLinks = document.querySelectorAll('.pagination .page-link');
  let currentPage = 1;

  // Function to show the images of the selected page
  function showPage(page) {
    firstGroup.classList.add('d-none');
    secondGroup.classList.add('d-none');
    thirdGroup.classList.add('d-none');
    fourthGroup.classList.add('d-none')

    if (page === 1) {
      firstGroup.classList.remove('d-none');
    } else if (page === 2) {
      secondGroup.classList.remove('d-none');
    } else if (page === 3) {
      thirdGroup.classList.remove('d-none');
    }
    else if (page === 4) {
      fourthGroup.classList.remove('d-none');
    }
  }

  // Initial display of the first page
  showPage(currentPage);

  // Add event listeners to the pagination links
  paginationLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const pageText = link.getAttribute('aria-label');

      if (pageText) {
        if (pageText === "Previous" && currentPage > 1) {
          currentPage--;
        } else if (pageText === "Next" && currentPage < 4) {
          currentPage++;
        }
      } else {
        currentPage = parseInt(link.innerText);
      }

      showPage(currentPage);
    });
  });
});
