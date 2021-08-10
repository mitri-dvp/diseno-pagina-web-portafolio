// Elements
const form = document.querySelector('form')
const form_output = document.querySelector('.form_output')

// Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()
  form_output.classList.remove('dnone')
})