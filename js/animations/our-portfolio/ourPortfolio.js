let wasInvoked = false;
export function ourPortfolioReveal(breakpoint) {
  if (!wasInvoked) {
    const ourPortfolioSectionHeader = document.getElementById(
      "our-portfolio-section-header"
    );
    const filters = [
      document.getElementById("our-portfolio-all"),
      document.getElementById("our-portfolio-commercial"),
      document.getElementById("our-portfolio-residental"),
      document.getElementById("our-portfolio-office"),
      document.getElementById("our-portfolio-other"),
    ];
    if (breakpoint === "xs") {
      ourPortfolioSectionHeader.style.animation =
        "reveal-to-right 1s ease-in-out";
      ourPortfolioSectionHeader.style.opacity = "1";
      let time = 200;
      filters.forEach((filter) => {
        setTimeout(() => {
          filter.style.animation =
            "reveal-to-top 1s ease-in-out";
          filter.style.opacity = "1";
        }, time);
        time += 200;
      });
    }
    wasInvoked = true
  }
}
