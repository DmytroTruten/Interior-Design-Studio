let wasInvoked = false;
export function questionSectionReveal(breakpoint) {
  if (!wasInvoked) {
    const questionSectionHeader = document.getElementById(
      "question-section-header"
    );
    const orderCallButton = document.getElementById("order-a-call-button");
    if (breakpoint === "xs") {
      questionSectionHeader.style.animation = "reveal-to-top 1s ease-in-out";
      questionSectionHeader.style.opacity = "1";
      setTimeout(() => {
        orderCallButton.style.animation = "reveal-to-top 1s ease-in-out";
        orderCallButton.style.opacity = "1";
      }, 200);
    } else {
      questionSectionHeader.style.animation = "reveal-to-right 1s ease-in-out";
      questionSectionHeader.style.opacity = "1";
      orderCallButton.style.animation = "reveal-to-left 1s ease-in-out";
      orderCallButton.style.opacity = "1";
    }
  }
}
