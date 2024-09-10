let list = document.querySelectorAll(".navbar li");
const cardbox = document.getElementById("cardbox");

const users = [
    { name: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
    { name: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
    { name: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
    { name: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
];

users.forEach((user) => {
    const cardDiv = document.createElement("div"); //Crée une div
    cardDiv.classList.add("card"); //Ajoute la class card à la div créée
    const imgBox = document.createElement("div");
    imgBox.classList.add("img");

    const profilImg = document.createElement("img");
    profilImg.src = user.profil;
    profilImg.alt = `Profil de ${user.name}`;

    const emptyDiv = document.createElement("div");
    const nameBox = document.createElement("div");
    nameBox.textContent = user.name;
    nameBox.classList.add("name");

    const professionBox = document.createElement("div");
    professionBox.textContent = user.profession;
    professionBox.classList.add("name");

    imgBox.appendChild(profilImg); //ajoute l'élément créé à son parent

    emptyDiv.appendChild(nameBox);
    emptyDiv.appendChild(professionBox);

    cardDiv.appendChild(imgBox);
    cardDiv.appendChild(emptyDiv);

    cardbox.appendChild(cardDiv);
});

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

bicon.onclick = function () {
    navbar.classList.toggle("active");
    main.classList.toggle("active");
};
