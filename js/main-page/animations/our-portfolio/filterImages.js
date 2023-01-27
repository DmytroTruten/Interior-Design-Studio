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
        let HideTime = 0;
        let displayTime = 490;
        let commercialImagesTime = 500;
        for (let i = 0; i < galleryImages.length; i++) {
          setTimeout(() => {
            galleryImages[i].style.animation = "hide .5s ease-in-out";
          }, HideTime);
          HideTime += 100;

          setTimeout(() => {
            galleryImages[i].style.display = "none";
          }, displayTime);
          displayTime += 100;

          setTimeout(() => {
            commercialImages[i].style.display = "block";
            commercialImages[i].style.animation = "reveal .5s ease-in-out";
          }, commercialImagesTime);
          commercialImagesTime += 100;
        }
      }
    });
  }
}
