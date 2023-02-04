import { revealIntoDirection } from "../reveal-function/revealIntoDirection.js";
export function animateNavbarDesktop() {
  // Getting access to desktop navbar elements
  const logo = document.querySelector(".logo");

  let headerElements = [
    Array.from(document.querySelectorAll(".header-link")),
    document.querySelector(".header-right-section").children[0],
    document.querySelector(".header-right-section").children[1],
  ];

  // Declare variable for setTimeout
  let revealTime = 200;

  // All elements of nested sub-arrays have been "raised" recursively
  headerElements = headerElements.flat();

  /* For each navbar element applying 
  animation in certain intervals */
  revealIntoDirection(logo, "left");

  for (let i = 0; i < headerElements.length; i++) {
    setTimeout(() => {
      revealIntoDirection(headerElements[i], "left");
    }, revealTime);
    revealTime += 200;
  }
}
