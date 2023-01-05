import { heroHeaderReveal } from "./animations/hero/heroHeader.js";
import { glowOfMainButtons } from "./animations/mainButtons.js";
import { animateNavbarMobile } from "./animations/navbar-sidenav/navbarMobile.js";
import { animateNavbarDesktop } from "./animations/navbar-sidenav/navbarDesktop.js";
import { toggleSideNav } from "./animations/navbar-sidenav/sideNav.js";
import { animateHeroImg } from "./animations/hero/heroImg.js";
import { aboutStudioReveal } from "./animations/about-studio/aboutStudio.js";

import { addScrollListener } from "./helpers/scrollListener.js";
import { addScrollIntoSection } from "./helpers/navigation.js";

if (window.screen.width < 576) {
  animateHeroImg("xs");
  addScrollListener("xs");
} else if (window.screen.width > 576 && window.screen.width <= 768) {
  animateHeroImg("sm");
  aboutStudioReveal();
} else if (window.screen.width > 768 && window.screen.width <= 992) {
  animateHeroImg("sm");
  aboutStudioReveal();
}

if (window.screen.width < 992) {
  animateNavbarMobile();
  toggleSideNav();
} else {
  animateHeroImg("sm");
  animateNavbarDesktop();
  addScrollListener("lg");
}

heroHeaderReveal();
glowOfMainButtons();
addScrollIntoSection();
