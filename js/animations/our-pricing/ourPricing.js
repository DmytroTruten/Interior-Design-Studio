let wasInvoked = false;
export function ourPricingReveal(breakpoint) {
  if (!wasInvoked) {
    const ourPricingSectionHeader = document.getElementById(
      "our-pricing-section-header"
    );
    const pricingCards = [
      document.getElementById("pricing-card-basic"),
      document.getElementById("pricing-card-standart"),
      document.getElementById("pricing-card-premium"),
    ];
    let cardTimeReveal = 200;
    if (breakpoint === "xs") {
      ourPricingSectionHeader.style.animation = "reveal-to-right 1s ease-in-out";
      ourPricingSectionHeader.style.opacity = "1";
      for (let card of pricingCards) {
        setTimeout(() => {
          card.style.animation =
            "reveal-to-right 1s ease-in-out";
          card.style.opacity = "1";
        }, cardTimeReveal);
        cardTimeReveal += 200
      }
    } else {
      ourPricingSectionHeader.style.animation = "reveal-to-top 1s ease-in-out";
      ourPricingSectionHeader.style.opacity = "1";
      for (let card of pricingCards) {
        setTimeout(() => {
          card.style.animation =
            "reveal-to-top 1s ease-in-out";
          card.style.opacity = "1";
        }, cardTimeReveal);
        cardTimeReveal += 200
      }
    }
    wasInvoked = true;
  }
}
