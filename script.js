const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav-div-two")
const navLink = document.querySelectorAll(".nav-link")
const mainSection = document.querySelector(".main-section")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
})

// mainSection.addEventListener("click", () => {
//     hamburger.classList.remove("active")
//     navBar.classList.remove("active")
// })

navLink.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navBar.classList.remove("active")
    })
})