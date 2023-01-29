const passwordInput = document.querySelector('.password-input')
const passwordInputLabel = document.querySelector('.password-input-label')

passwordInput.addEventListener('focus', () => {
  passwordInputLabel.style.transform = 'translateY(-20px)'
  passwordInputLabel.style.fontSize = "14px"
})

passwordInput.addEventListener('blur', () => {
  passwordInputLabel.style.transform = 'translateY(0px)'
  passwordInputLabel.style.fontSize = "16px"
})