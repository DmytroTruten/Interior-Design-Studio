export function dropdownToggle() {
  const dropdown = document.getElementById("dropdown");
  const selectUALanguage = document.getElementById("ua-language");
  const dropdownArrow = document.getElementById("dropdown-arrow");
  dropdown.addEventListener("click", (event) => {
    if(selectUALanguage.classList.contains('language-reveal')) {
      dropdownArrow.style.transform = 'rotate(0deg)'
      selectUALanguage.style.animation = 'hide .3s ease-in-out forwards'
      setTimeout(() => {
        selectUALanguage.style.visibility = 'hidden'
      }, 300)
    } else {
      dropdownArrow.style.transform = 'rotate(-180deg)'
      selectUALanguage.style.animation = 'reveal .3s ease-in-out forwards'
      selectUALanguage.style.visibility = 'visible'
    }
    selectUALanguage.classList.toggle("language-reveal");
  });
}
