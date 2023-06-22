const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav-div-two")
const navLink = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navBar.classList.remove("active")
    })
})