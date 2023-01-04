const hamburgerContainer = document.querySelector(".hamburger-container");
const sideNavBackPanel = document.querySelector(".sidenav-back-panel");
const sideNav = document.querySelector(".sidenav");

export function toggleSideNav() {
  hamburgerContainer.addEventListener("click", () => {
    hamburgerContainer.classList.remove("menu-off");
    hamburgerContainer.classList.add("menu-on");

    sideNav.style.width = "60%";
    sideNavBackPanel.style.display = "block";
    sideNavBackPanel.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  });
  sideNavBackPanel.addEventListener("click", () => {
    hamburgerContainer.classList.remove("menu-on");
    hamburgerContainer.classList.add("menu-off");

    sideNav.style.width = "0";
    sideNavBackPanel.style.display = "none";
  });
}
