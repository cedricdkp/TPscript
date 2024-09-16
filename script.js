let list = document.querySelectorAll(".navbar li");
const cardbox = document.getElementById("cardbox");

const users = [
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


// Stocker les données dans le localStorage
function storeUsers(users) {
    const usersJSON = JSON.stringify(users);
    localStorage.setItem("users", usersJSON);
}

// Récupérer les données du localStorage
function loadUsers() {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
}


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


function afficherformulaire() {
    let btnpp = document.querySelector(".btnpp");
    btnpp.classList.add("active");
}

function cacherformulaire() {
    let btnpp = document.querySelector(".btnpp");
    btnpp.classList.remove("active");
}

function initformulaire() {
    let btnutilisateur = document.querySelector(".zoneutilisateur button");
    let btnpp = document.querySelector(".btnpp");
    btnutilisateur.addEventListener("click", () => {
        afficherformulaire();
    });

    btnpp.addEventListener("click", (Event) => {
        if (Event.target === btnpp) {
            cacherformulaire();
        }
    });
}

initformulaire();


document.addEventListener('DOMContentLoaded', function() {
    const btnAjouter = document.getElementById('btnj');
    const formulaireContainer = document.querySelector('.btnpp');
    const userForm = document.getElementById('userForm');
    const cardbox = document.getElementById('cardbox');

    btnAjouter.addEventListener('click', function() {
        formulaireContainer.style.display = formulaireContainer.style.display === 'none' ? 'flex' : 'none';
    });

    

    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nom = document.getElementById('nom').value;
        const profession = document.getElementById('profession').value;
        const imageInput = document.getElementById('image');
        const imageFile = imageInput.files[0];
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.src = URL.createObjectURL(imageFile);
        img.alt = nom;
        img.style.width = '100px'; 
        img.style.height = '100px'; 
        img.style.borderRadius = '50%'; 

        cardDiv.innerHTML = `<div class="nom">${nom}</div><div class="profession">${profession}</div>`;
        cardDiv.appendChild(img);
        
        
        cardbox.appendChild(cardDiv);

    
        userForm.reset();
        formulaireContainer.style.display = 'none';
    });
});
    