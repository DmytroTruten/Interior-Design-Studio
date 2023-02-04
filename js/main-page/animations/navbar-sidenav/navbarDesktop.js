import { revealIntoDirection } from "../reveal-function/revealIntoDirection.js";
export function animateNavbarDesktop() {

  // Getting access to desktop navbar elements
  let headerElements = [
    document.querySelector(".logo"),
    Array.from(document.querySelectorAll(".header-link")),
    document.querySelector(".header-right-section").children[0],
    document.querySelector(".header-right-section").children[1],
  ];

  // Declare variable for setTimeout
  let revealTime = 200;

  // console.log(headerElements)

  // All elements of nested sub-arrays have been "raised" recursively
  headerElements = headerElements.flat();

  for (let i = 0; i < headerElements.length; i++) {
    if(headerElements[i].classList.contains("header-link")) {
      headerElements[i].addEventListener('mouseenter', () => {
        headerElements[i].style.transform = 'scale(1.1)';
      })
      headerElements[i].addEventListener('mouseleave', () => {
        headerElements[i].style.transform = 'scale(1)';
      })
    }
  }

  /* For each navbar element applying 
  animation in certain intervals */
  for (let i = 0; i < headerElements.length; i++) {
    setTimeout(() => {
      revealIntoDirection(headerElements[i], "left");
    }, revealTime);
    revealTime += 200;
  }
}
