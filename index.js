var burger = document.querySelector('.burger')
var navbar = document.querySelector('.navbar')
var leftnav = document.querySelector('.leftnav')
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav')
    leftnav.classList.toggle('h-nav')
    leftnav.classList.toggle('vis')
    navbar.classList.toggle('vis')
})