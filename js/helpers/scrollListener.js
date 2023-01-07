import { aboutStudioReveal } from "../animations/about-studio/aboutStudio.js";

export function addScrollListener(breakpoint) {
  window.addEventListener("scroll", () => {
    let scrollYPosition = scrollY;
    console.log(scrollYPosition);
    switch (breakpoint) {
      case "xs-1":
        if (scrollYPosition >= 700 && scrollYPosition <= 800) {
          aboutStudioReveal("xs-1");
        }
        break;
      case "xs-2":
        if (scrollYPosition >= 500 && scrollYPosition <= 600) {
          aboutStudioReveal("xs-2");
        }
        break;
      case "xs-3":
        if (scrollYPosition >= 500 && scrollYPosition <= 600) {
          aboutStudioReveal("xs-3");
        }
        break;
      case "lg":
        if (scrollYPosition >= 100 && scrollYPosition <= 200) {
          aboutStudioReveal("lg");
        }
        break;
    }
  });
}
