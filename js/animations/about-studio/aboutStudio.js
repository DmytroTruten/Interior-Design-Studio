export function aboutStudioReveal() {
  const aboutStudioSectionHeader = document.getElementById(
    "about-studio-section-header"
  );
  const aboutStudioMainText = document.getElementById("about-studio-main-text");
  const aboutStudioMore = document.getElementById("about-studio-more");

  aboutStudioSectionHeader.style.animation = "reveal-to-right 1s ease-in-out";
  aboutStudioSectionHeader.style.opacity = "1";

  setTimeout(() => {
    aboutStudioMainText.style.animation = "reveal-to-left 1s ease-in-out";
    aboutStudioMainText.style.opacity = "1";
  }, 500)

  setTimeout(() => {
    aboutStudioMore.style.animation = "reveal-to-right 1s ease-in-out";
    aboutStudioMore.style.opacity = "1";
  }, 950)
}
