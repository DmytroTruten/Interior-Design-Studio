const mainButtons = document.querySelectorAll('.main-btn');

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

