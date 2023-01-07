import { aboutStudioReveal } from "../animations/about-studio/aboutStudio.js";
import { ourServicesReveal } from "../animations/our-services/ourServices.js";

export function addScrollListener(breakpoint) {
  const aboutStudioMoreContainer = document.querySelector(
    ".about-studio-more-container"
  );
  window.addEventListener("scroll", () => {
    let scrollYPosition = scrollY;
    console.log(scrollYPosition);
    switch (breakpoint) {
      case "xs-1":
        if (scrollYPosition >= 700) {
          aboutStudioReveal("xs-1");
        }
        if (
          !aboutStudioMoreContainer.classList.contains("reveal-text-xs-1") &&
          scrollYPosition >= 1300
        ) {
          ourServicesReveal("xs-1");
        }
        break;
      case "xs-2":
        if (scrollYPosition >= 500) {
          aboutStudioReveal("xs-2");
        }
        break;
      case "xs-3":
        if (scrollYPosition >= 500) {
          aboutStudioReveal("xs-3");
        }
        break;
      case "lg":
        if (scrollYPosition >= 100) {
          aboutStudioReveal("lg");
        }
        break;
    }
  });
}
