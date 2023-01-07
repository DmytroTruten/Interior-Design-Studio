let wasInvoked = false;
export function ourServicesReveal(breakpoint) {
  if (!wasInvoked) {
    const ourServicesSectionHeader = document.getElementById(
      "our-services-section-header"
    );
    const interiorDesignCardIcon = document.getElementById(
      "interior-design-card-icon"
    );
    const interiorDesignCardHeader = document.getElementById(
      "interior-design-card-header"
    );
    const interiorDesignCardDescription = document.getElementById(
      "interior-design-card-description"
    );
    if (breakpoint === "xs-1") {
      ourServicesSectionHeader.style.animation =
        "reveal-to-right 1s ease-in-out";
      ourServicesSectionHeader.style.opacity = "1";

      setTimeout(() => {
        interiorDesignCardIcon.style.animation =
          "reveal-to-right 1s ease-in-out";
        interiorDesignCardIcon.style.opacity = "1";
      }, 200);

      setTimeout(() => {
        interiorDesignCardHeader.style.animation =
          "reveal-to-right 1s ease-in-out";
        interiorDesignCardHeader.style.opacity = "1";
      }, 400);

      setTimeout(() => {
        interiorDesignCardDescription.style.animation =
          "reveal-to-right 1s ease-in-out";
        interiorDesignCardDescription.style.opacity = "1";
      }, 600);
    }
    wasInvoked = true;
  }
}
