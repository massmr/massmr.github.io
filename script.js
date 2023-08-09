//Animation control

const loader = document.querySelector(".loaderContainer");
const header = document.querySelector(".header_home");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.classList.add("all_hidden");
main.classList.add("all_hidden");
footer.classList.add("all_hidden");
setTimeout(() => {
    loader.classList.add("loader_deactivate");
    //header.classList.add("all_display");
    //main.classList.add("all_display");
    //footer.classList.add("all_display");
    header.classList.remove("all_hidden");
    main.classList.remove("all_hidden");
    footer.classList.remove("all_hidden");
}, 3000);