const filters = document.querySelectorAll(".filter");
const galleryImages = Array.from(document.querySelectorAll("#gallery-img"));
const commercialImages = Array.from(
  document.querySelectorAll("#commercial-img")
);

let currentImages = galleryImages;
let nextImages;

export function filterPortfolioImages() {
  for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function (event) {
      let activeFilter = document.getElementsByClassName("active-filter")[0];
      activeFilter.className = activeFilter.className.replace(
        " active-filter",
        ""
      );
      this.className += " active-filter";

      let previousImagesHideTime = 0;
      let displayNoneTime = 490;
      let currentImagesRevealTime = 500;

      switch (event.target.id) {
        case "all":
          nextImages = galleryImages;
          break;
        case "commercial":
          nextImages = commercialImages;
          break;
      }
      animateFilterImages(
        currentImages,
        nextImages,
        previousImagesHideTime,
        displayNoneTime,
        currentImagesRevealTime
      );
    });
  }
}

function animateFilterImages(
  currentImages,
  nextImages,
  previousImagesHideTime,
  displayNoneTime,
  currentImagesRevealTime
) {
  for (let i = 0; i < currentImages.length; i++) {
    setTimeout(() => {
      currentImages[i].style.animation = "hide .5s ease-in-out";
    }, previousImagesHideTime);
    previousImagesHideTime += 100;
    setTimeout(() => {
      currentImages[i].style.display = "none";
    }, displayNoneTime);
    displayNoneTime += 100;
    setTimeout(() => {
      nextImages[i].style.animation = "reveal .5s ease-in-out";
      nextImages[i].style.display = "block";
      if (i === 7) {
        changeImages();
      }
    }, currentImagesRevealTime);
    currentImagesRevealTime += 100;
  }
}

function changeImages() {
  currentImages = nextImages;
  nextImages = undefined;
}
