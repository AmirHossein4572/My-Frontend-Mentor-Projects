let email = []
let inputElement = document.querySelector('.js-Input')
const userEmail = document.querySelector('.js-emailaddress')
const valid = document.querySelector('.js-email-validation')

function emailValidation() {
function subscribe(email) {
  email = inputElement.value 
  localStorage.setItem('userEmail',JSON.stringify(email)) 
  const atpos = email.indexOf('@')
  const dotpos =email.lastIndexOf('.')
  return atpos > 0 && dotpos > atpos + 1 
}
if (subscribe(email)) {
  
  console.log(localEmail)
  window.open('juniorProjectpage2.html')

}else if (!subscribe(email)) {
  valid.innerHTML = `Wrong Format`
}

}
let localEmail = JSON.parse(localStorage.getItem('userEmail'))
userEmail.innerHTML = `${localEmail}`