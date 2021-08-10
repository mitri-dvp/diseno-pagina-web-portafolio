// Elements
const form = document.querySelector('form')
const form_output = document.querySelector('.form_output')
const mobile_button = document.querySelector('.mobile_button')
const mobile_nav = document.querySelector('.mobile_nav')

// Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()
  form_output.classList.remove('dnone')
})

mobile_button.addEventListener('click', () => {
  mobile_nav.classList.toggle('active')
})