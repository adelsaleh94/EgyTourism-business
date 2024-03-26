const nav = document.querySelector("nav")
const boxmenu = document.querySelector(".box-menu")
const off = document.querySelector(".close")

// Global Here Event Scroll & Closed/Open Element
window.addEventListener("scroll", function (mo) {
    console.log(scrollY);
    let scroll = scrollY
    if (scroll > 280) {
        nav.style.width = "100%"
        nav.style.top = "0%"
        nav.style.backgroundColor = "#c19f37"
    } else {
        nav.style.top = "5%"
        nav.style.width = "80%"
        nav.style.backgroundColor = "#0000"
    }
})

nav.addEventListener("click", (mo) => {
    mo.preventDefault()
    if (mo.target.className == ("fa-solid fa-bars")) {
        boxmenu.style.display = "block"

    } if (mo.target.className == ("fa-solid fa-x")) {
        mo.target.classList.add("btn")
    }
})
off.addEventListener("click", function (mo) {
    boxmenu.style.display = "none"
})
boxmenu.addEventListener("click", function (mo) {
    mo.preventDefault()
    if (mo.target.className == ("scrolltwo")) {
        window.scrollTo(0, 626)
    } if (mo.target.className == ("home")) {
        window.scrollTo(0, 0)
    } if (mo.target.className == ("contant")) {
        window.scrollTo(0, 3000)
    } if (mo.target.className == ("about")) {
        window.scrollTo(0, 15000)
    } if (mo.target.className == ("partners")) {
        window.scrollTo(0, 2575)
    } if (mo.target.className == ("watch")) {
        window.scrollTo(0, 1915)
    }
})
// Thanks on ur FeedBack <3