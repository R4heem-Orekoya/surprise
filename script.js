const greetings = document.querySelector('.greetings')
const gift = document.querySelector('.gift')
const decor = document.querySelector('.decor')
const text = document.querySelector('.text')
const audio = document.querySelector('audio')

document.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
      greetings.classList.add('active')
   }, 2000)
})

gift.addEventListener('click', () => {
   document.body.classList.add('active')
   setTimeout(() => {
      decor.classList.add('active')
      audio.play()
   }, 1000)
   setTimeout(() => {
      text.classList.add('active')
   }, 2000)
})
