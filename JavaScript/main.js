var header = document.getElementById("scroll")


window.addEventListener("scroll", scroll)

function scroll(mo) {
    let scrol = scrollY

    if (scrol > 618) {
        header.style.top = "2%"
        header.style.backgroundColor = "#ffffff5b"
    } else {
        header.style.backgroundColor = "#0c0c0c"
        header.style.top = "0%"
        header.style.width = "100%"
    }
}