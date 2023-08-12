const openMenu = document.getElementById("open-menu");
const nav = document.querySelector("nav")
const body = document.querySelector("body")

// body.addEventListener("click", () => {
//     nav.style.opacity = "0";
//     nav.style.zIndex = "0";  
// })

openMenu.addEventListener("click", () => {
    if (nav.style.opacity === "0") {
        nav.style.opacity = "1";
        nav.style.zIndex = "999";
    } else {
        nav.style.opacity = "0";
        nav.style.zIndex = "0";  
    }


})