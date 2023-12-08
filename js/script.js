const btn = document.getElementById('menuBtn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => { 
  nav.classList.toggle('hidden')
})