export function redirect() {
  const mainButtons = document.querySelectorAll(".main-btn");

  for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", () => {
      if (mainButtons[i].id === "hero-header-button") {
        window.location.assign("buySubscription.html");
      } else if (mainButtons[i].id === "consultation-button") {
        window.location.assign("orderCall.html");
      } else if (mainButtons[i].classList.contains("buy-now-button")) {
        setTimeout(() => {
          window.location.assign("buySubscription.html");
        }, 600);
      } else if (mainButtons[i].id === "order-a-call-button") {
        window.location.assign("orderCall.html");
      }
    });
  }
}
