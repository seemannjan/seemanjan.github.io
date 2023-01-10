/* Mobile nav */

let navIcon = document.querySelector(".mobile-nav-icon")
let navClose = document.querySelector(".mobile-nav-close")
let mobileNavBack = document.querySelector(".mobile-nav-back")

navIcon.addEventListener("click", function(){
    mobileNavBack.style.display = "block"
    navIcon.style.display = "none"
    navClose.style.display = "block"
})

navClose.addEventListener("click", function(){
    mobileNavBack.style.display = "none"
    navClose.style.display = "none"
    navIcon.style.display = "block"
})