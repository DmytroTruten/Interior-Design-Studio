export function redirect() {
  const mainButtons = document.querySelectorAll(".main-btn");

  for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", () => {
      if (mainButtons[i].id === "hero-header-button") {
        window.location.assign("buySubscription.html");

      } else if (mainButtons[i].id === "consultation-button") {
        window.location.assign("orderCall.html");

      } else if (mainButtons[i].id === "pricing-card-basic-btn") {
        setTimeout(() => {
          window.location.assign("buySubscription.html#basic");
        }, 600);

      } else if (mainButtons[i].id === "pricing-card-standart-btn") {
        setTimeout(() => {
          window.location.assign("buySubscription.html#standart");
        }, 600);

      } else if (mainButtons[i].id === "pricing-card-premium-btn") {
        setTimeout(() => {
          window.location.assign("buySubscription.html#premium");
        }, 600);

      } else if (mainButtons[i].id === "order-a-call-button") {
        window.location.assign("orderCall.html");
        
      }
    });
  }
}
