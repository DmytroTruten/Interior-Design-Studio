export function filterPortfolioImages() {
  const filters = document.querySelectorAll("#filter");
  const galleryImages = document.querySelectorAll("#gallery-img");
  const commercialImages = document.querySelectorAll("#commercial-img");

  for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function (event) {
      let currentFilter = document.getElementsByClassName("active-filter");
      currentFilter[0].className = currentFilter[0].className.replace(
        " active-filter",
        ""
      );
      this.className += " active-filter";

      if (event.currentTarget === filters[1]) {
        galleryImages[0].style.animation = "hide .5s ease-in-out";
        setTimeout(() => {
          galleryImages[0].style.display = "none";
        }, 490);
        setTimeout(() => {
          commercialImages[0].style.display = "block";
          commercialImages[0].style.animation = "reveal .5s ease-in-out";
          commercialImages[0].style.opacity = "1";
        }, 500);
      }
    });
  }
}
