import { heroHeaderReveal } from "./animations/hero/heroHeader.js";
import { glowOfMainButtons } from "./animations/mainButtons.js";
import { animateNavbarMobile } from "./animations/navbar-sidenav/navbarMobile.js";
import { animateNavbarDesktop } from "./animations/navbar-sidenav/navbarDesktop.js";
import { toggleSideNav } from "./animations/navbar-sidenav/sideNav.js";
import { animateHeroImg } from "./animations/hero/heroImg.js";

import { addScrollListener } from "./helpers/scrollListener.js";
import { scrollIntoSection } from "./helpers/navigation.js";

if (window.screen.width < 576) {
  animateHeroImg("xs")
  addScrollListener('xs')
} else {
  animateHeroImg('sm')
}

if (window.screen.width < 992) {
  animateNavbarMobile();
  toggleSideNav();
} else {
  animateNavbarDesktop();
}

heroHeaderReveal();
glowOfMainButtons();
scrollIntoSection()

