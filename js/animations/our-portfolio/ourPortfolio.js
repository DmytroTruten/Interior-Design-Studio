let wasInvoked = false;
export function ourPortfolioReveal(breakpoint) {
  if (!wasInvoked) {
    const ourPortfolioSectionHeader = document.getElementById(
      "our-portfolio-section-header"
    );
    const tabsContainerMore = document.getElementById("tabs-container-more");
    const filters = document.querySelectorAll('#filter')
    const galleryImages = document.querySelectorAll('#gallery-img');
    let filterTimeReveal = 0;
    let galleryImagesTimeReveal = 400;
    if (breakpoint === "xs") {
      ourPortfolioSectionHeader.style.animation =
        "reveal-to-right 1s ease-in-out";
      ourPortfolioSectionHeader.style.opacity = "1";
      for (let i = 0; i < filters.length; i++) {
        setTimeout(() => {
          filters[i].style.animation = "reveal-to-top 1s ease-in-out";
          filters[i].style.opacity = "1";
        }, filterTimeReveal);
        filterTimeReveal += 100;
      }
      for (let i = 0; i < galleryImages.length; i++) {
        if (galleryImages[i].id === "gallery-img-4") {
          break;
        }
        setTimeout(() => {
          galleryImages[i].style.animation = "reveal-to-right 1s ease-in-out";
          galleryImages[i].style.opacity = "1";
        }, galleryImagesTimeReveal);
        galleryImagesTimeReveal += 100;
      }
    } else if (
      breakpoint === "sm" ||
      breakpoint === "md" ||
      breakpoint === "lg" ||
      breakpoint === "xl"
    ) {
      ourPortfolioSectionHeader.style.animation =
        "reveal-to-top 1s ease-in-out";
      ourPortfolioSectionHeader.style.opacity = "1";
      for (let i = 0; i < filters.length; i++) {
        setTimeout(() => {
          filters[i].style.animation = "reveal-to-top 1s ease-in-out";
          filters[i].style.opacity = "1";
        }, filterTimeReveal);
        filterTimeReveal += 100;
      }
      setTimeout(() => {
        tabsContainerMore.style.animation = "reveal-to-top 1s ease-in-out";
        tabsContainerMore.style.opacity = "1";
      }, 600);
      for (let i = 0; i < galleryImages.length; i++) {
        setTimeout(() => {
          galleryImages[i].style.animation = "reveal-to-top 1s ease-in-out";
          galleryImages[i].style.opacity = "1";
        }, galleryImagesTimeReveal);
        galleryImagesTimeReveal += 100;
      }
    }
    wasInvoked = true;
  }
}
