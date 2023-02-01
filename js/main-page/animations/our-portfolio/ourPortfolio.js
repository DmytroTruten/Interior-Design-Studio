import { revealIntoDirection } from "../reveal-function/revealIntoDirection.js";

let wasInvoked = false;
export function ourPortfolioReveal(breakpoint) {
  if (!wasInvoked) {
    const ourPortfolioSectionHeader = document.getElementById(
      "our-portfolio-section-header"
    );
    const tabsContainerMore = document.getElementById("tabs-container-more");
    const filters = document.querySelectorAll(".filter");
    const allImages = document.querySelectorAll("#all-img");
    let filterTimeReveal = 0;
    let allImagesTimeReveal = 400;
    if (breakpoint === "xs") {
      revealIntoDirection(ourPortfolioSectionHeader, "right");
      for (let i = 0; i < filters.length; i++) {
        setTimeout(() => {
          revealIntoDirection(filters[i], "top");
        }, filterTimeReveal);
        filterTimeReveal += 100;
      }
      for (let i = 0; i < allImages.length; i++) {
        setTimeout(() => {
          revealIntoDirection(allImages[i], "right");
        }, allImagesTimeReveal);
        allImagesTimeReveal += 100;
      }
    } else if (
      breakpoint === "sm" ||
      breakpoint === "md" ||
      breakpoint === "lg" ||
      breakpoint === "xl"
    ) {
      revealIntoDirection(ourPortfolioSectionHeader, "top");
      for (let i = 0; i < filters.length; i++) {
        setTimeout(() => {
          revealIntoDirection(filters[i], "top");
        }, filterTimeReveal);
        filterTimeReveal += 100;
      }
      setTimeout(() => {
        revealIntoDirection(tabsContainerMore, "top");
      }, 600);
      for (let i = 0; i < allImages.length; i++) {
        setTimeout(() => {
          revealIntoDirection(allImages[i], "top");
        }, allImagesTimeReveal);
        allImagesTimeReveal += 100;
      }
    }
    wasInvoked = true;
  }
}
