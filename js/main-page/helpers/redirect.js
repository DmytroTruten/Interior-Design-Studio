export function redirect() {
  const buyNowButtons = document.querySelectorAll('.buy-now-button')

  for (let i = 0; i < buyNowButtons.length; i++) {
    buyNowButtons[i].addEventListener('click', () => {
      setTimeout(() => {
        window.location.assign("buySubscription.html")
      }, 600)
    })
  }
}
