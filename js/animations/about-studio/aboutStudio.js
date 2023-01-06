let wasInvoked = false;

export function aboutStudioReveal(breakpoint) {
  if (!wasInvoked) {
    const aboutStudioSectionHeader = document.getElementById(
      "about-studio-section-header"
    );
    const aboutStudioMainText = document.getElementById(
      "about-studio-main-text"
    );
    const aboutStudioMore = document.getElementById("about-studio-more");
    const aboutStudioMoreContainer = document.querySelector(
      ".about-studio-more-container"
    );
    if (breakpoint === "xs") {
      aboutStudioMore.addEventListener("click", () => {
        aboutStudioMoreContainer.classList.toggle("reveal-text-xs");
      });
    } else if ((breakpoint === "sm")) {
      aboutStudioMore.addEventListener("click", () => {
        aboutStudioMoreContainer.classList.toggle("reveal-text-sm");
      });
    } else if ((breakpoint === "md")) {
      aboutStudioMore.addEventListener("click", () => {
        aboutStudioMoreContainer.classList.toggle("reveal-text-md");
      });
    }

    aboutStudioSectionHeader.style.animation = "reveal-to-left 1s ease-in-out";
    aboutStudioSectionHeader.style.opacity = "1";

    setTimeout(() => {
      aboutStudioMainText.style.animation = "reveal-to-right 1s ease-in-out";
      aboutStudioMainText.style.opacity = "1";
    }, 500);

    setTimeout(() => {
      aboutStudioMore.style.animation = "reveal-to-left 1s ease-in-out";
      aboutStudioMore.style.opacity = "1";
    }, 950);

    wasInvoked = true;
  }
}
