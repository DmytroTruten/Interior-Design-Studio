function setPricingType() {
  const pricingTypes = [
    document.getElementById('basic'),
    document.getElementById('standard'),
    document.getElementById('premium'),
  ]
  if(window.location.hash) {
    if(window.location.hash === "#basic") {
      pricingTypes[0].setAttribute("checked", "checked")
    }
  }
}

setPricingType()