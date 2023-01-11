let wasInvoked = false;
export function pricingCardsHover() {
  if (!wasInvoked) {
    const pricingCards = [
      document.getElementById("pricing-card-basic"),
      document.getElementById("pricing-card-standart"),
      document.getElementById("pricing-card-premium"),
    ];
    pricingCards[0].addEventListener("mousemove", (event) => {
      const x = event.pageX - event.currentTarget.offsetLeft;
      const y = event.pageY - event.currentTarget.offsetTop;
      if (
        x <= pricingCards[0].offsetWidth / 2 &&
        y <= pricingCards[0].offsetHeight / 2
      ) {
        pricingCards[0].style.transform =
          "perspective(1500px) rotateX(15deg) rotateY(-15deg)";
      }
      console.log(x, y);
    });
    wasInvoked = true;
  }
}
