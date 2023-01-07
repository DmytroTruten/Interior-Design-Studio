import { aboutStudioReveal } from "../animations/about-studio/aboutStudio.js";
import { ourServicesReveal } from "../animations/our-services/ourServices.js";

export function addScrollListener(breakpoint) {
  const hero = document.querySelector(".hero");
  const aboutStudioSection = document.querySelector(".about-studio-section");
  window.addEventListener("scroll", () => {
    let scrollYPosition = scrollY;
    console.log(scrollYPosition);
    switch (breakpoint) {
      case "xs-1":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("xs-1");
        }
        if (
          scrollYPosition >=
          hero.offsetHeight + aboutStudioSection.offsetHeight / 2
        ) {
          ourServicesReveal("xs");
        }
        break;
      case "xs-2":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("xs-2");
        }
        if (
          scrollYPosition >=
          hero.offsetHeight + aboutStudioSection.offsetHeight / 2
        ) {
          ourServicesReveal("xs");
        }
        break;
      case "xs-3":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("xs-3");
        }
        if (
          scrollYPosition >=
          hero.offsetHeight + aboutStudioSection.offsetHeight / 2
        ) {
          ourServicesReveal("xs");
        }
        break;

      case "sm":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          ourServicesReveal("sm");
        }
        break;
      case "md":
        if (scrollYPosition >= hero.offsetHeight / 5) {
          ourServicesReveal("md");
        }
        break;
      case "lg":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("lg");
        }
        if (scrollYPosition >= hero.offsetHeight) {
          ourServicesReveal("lg");
        }
        break;
    }
  });
}
