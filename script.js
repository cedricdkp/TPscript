


let list = document.querySelectorAll(".navbar li");

function activelink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => {
    item.addEventListener("mouseover", activelink);
});



let navbar = document.querySelector(".navbar");
let bicon = document.querySelector(".bicon");
let main = document.querySelector(".main");

bicon . onclick = function () {
    navbar.classList.toggle("active");
    main.classList.toggle("active");
}
