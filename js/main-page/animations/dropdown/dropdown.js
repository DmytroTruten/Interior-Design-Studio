export function dropdownToggle() {
  const selectUALanguage = document.getElementById("ua-language");
  const selectENLanguage = document.getElementById("en-language");
  const dropdownArrow = document.getElementById("dropdown-arrow");
  const headerLink = document.querySelectorAll(".header-link");
  selectENLanguage.addEventListener("click", () => {
    if (selectUALanguage.classList.contains("language-reveal")) {
      dropdownArrow.style.transform = "rotate(0deg)";
      selectUALanguage.style.animation = "hide .3s ease-in-out forwards";
      setTimeout(() => {
        selectUALanguage.style.visibility = "hidden";
      }, 300);
    } else {
      dropdownArrow.style.transform = "rotate(-180deg)";
      selectUALanguage.style.animation = "reveal .3s ease-in-out forwards";
      selectUALanguage.style.visibility = "visible";
    }
    selectUALanguage.classList.toggle("language-reveal");
  });
  selectUALanguage.addEventListener("click", function () {
    changeLanguage("ua");
  });

  function changeLanguage(lang) {
    console.log(lang);
    location.hash = lang;
    location.reload();
  }

  const language = {
    en: {
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Pricing",
    },
    ua: {
      services: "Послуги",
      portfolio: "Портфоліо",
      pricing: "Ціни",
    },
  };

  // Check if a hash value exists in the URL
  if (window.location.hash) {
    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash === "#ua") {
      for (let i = 0; i < headerLink.length; i++) {
        headerLink[i].textContent = Object.values(language.ua)[i];
      }
    }
  }
}
