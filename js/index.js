const mainButtons = document.querySelectorAll('.main-btn');
const links = document.querySelectorAll('.navigation-link');
// const sections = [
//   document.querySelector('.about-studio-section'),
//   document.querySelector('.our-services-section'),
//   document.querySelector('.our-portfolio-section'),
//   document.querySelector('.our-pricing-section'),
//   document.querySelector('.testimonials-section'),
// ]
const aboutStudioSection = document.querySelector('.about-studio-section');


mainButtons.forEach((button) => {
  button.addEventListener("mouseover", event => {
    event.target.classList.remove("pulsating-effect-off")
    event.target.classList.add("pulsating-effect-on")
    event.target.style.animation = "pulsating-effect-on .5s ease-in-out forwards"
  })
  button.addEventListener("mouseout", event => {
    event.target.classList.remove("pulsating-effect-on")
    event.target.classList.add("pulsating-effect-off")
    event.target.style.animation = "pulsating-effect-off .5s ease-in-out forwards"
  })
})

links.forEach((link) => {
  link.addEventListener("click", event => {
    switch (event.target.id) {
      case "about":
        aboutStudioSection.scrollIntoView({block: "center", behavior: "smooth"})
        break
    }
  })
})