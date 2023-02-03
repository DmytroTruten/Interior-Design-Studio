(function () {
  const pricingTypes = [
    document.getElementById("basic"),
    document.getElementById("standard"),
    document.getElementById("premium"),
  ];
  let chosenPricingType;
  if (window.location.hash) {
    if (window.location.hash === "#basic") {
      chosenPricingType = pricingTypes[0]
    } else if (window.location.hash === "#standart") {
      chosenPricingType = pricingTypes[1]
    } else {
      chosenPricingType = pricingTypes[2]
    }
    chosenPricingType.setAttribute("checked", "checked")
  }
})();
