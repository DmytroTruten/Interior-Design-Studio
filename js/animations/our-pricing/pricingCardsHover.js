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
        x < pricingCards[0].offsetWidth / 3 &&
        y < pricingCards[0].offsetHeight / 3
      ) {
        pricingCards[0].style.transform =
          "perspective(1500px) rotateX(10deg) rotateY(-10deg)";
      } else if (
        x > pricingCards[0].offsetWidth / 3 &&
        x < (pricingCards[0].offsetWidth / 3) * 2 &&
        y < pricingCards[0].offsetHeight / 3
      ) {
        pricingCards[0].style.transform = "perspective(1500px) rotateX(10deg)";
      } else if (
        x > (pricingCards[0].offsetWidth / 3) * 2 &&
        y < pricingCards[0].offsetHeight / 3
      ) {
        pricingCards[0].style.transform =
          "perspective(1500px) rotateX(10deg) rotateY(10deg)";
      } else if (
        x < pricingCards[0].offsetWidth / 3 &&
        y > pricingCards[0].offsetHeight / 3 &&
        y < (pricingCards[0].offsetHeight / 3) * 2
      ) {
        pricingCards[0].style.transform = "perspective(1500px) rotateY(-10deg)";
      } else if (
        x > pricingCards[0].offsetWidth / 3 &&
        x < (pricingCards[0].offsetWidth / 3) * 2 &&
        y > pricingCards[0].offsetHeight / 3 &&
        y < (pricingCards[0].offsetHeight / 3) * 2
      ) {
        pricingCards[0].style.transform = "rotateX(0deg) rotateY(0deg)";
      } else if (
        x > (pricingCards[0].offsetWidth / 3) * 2 &&
        y > pricingCards[0].offsetHeight / 3 &&
        y < (pricingCards[0].offsetHeight / 3) * 2
      ) {
        pricingCards[0].style.transform = "perspective(1500px) rotateY(10deg)";
      } else if (
        x < pricingCards[0].offsetWidth / 3 &&
        y > (pricingCards[0].offsetHeight / 3) * 2
      ) {
        pricingCards[0].style.transform =
          "perspective(1500px) rotateX(-10deg) rotateY(-10deg)";
      } else if (
        x > pricingCards[0].offsetWidth / 3 &&
        x < (pricingCards[0].offsetWidth / 3) * 2 &&
        y > (pricingCards[0].offsetHeight / 3) * 2
      ) {
        pricingCards[0].style.transform =
          "perspective(1500px) rotateX(-10deg)";
      } else if (
        x > (pricingCards[0].offsetWidth / 3) * 2 &&
        y > (pricingCards[0].offsetHeight / 3) * 2
      ) {
        pricingCards[0].style.transform =
          "perspective(1500px) rotateX(-10deg) rotateY(10deg)";
      }
    });
    pricingCards[0].addEventListener('mouseleave', () => {
      pricingCards[0].style.transform = 'rotateX(0deg) rotateY(0deg)'
    })
    wasInvoked = true;
  }
}
