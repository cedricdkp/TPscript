


/*let list = document.querySelectorAll(".navbar li");

function activelink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => {
    item.addEventListener("mouseover", activelink);
});*/



/*let navbar = document.querySelector(".navbar");
let bicon = document.querySelector(".bicon");
let main = document.querySelector(".main");

bicon . onclick = function () {
    navbar.classList.toggle("active");
    main.classList.toggle("active");
}*/


let list = document.querySelectorAll(".navbar li");
const cardbox = document.getElementById("cardbox");

const utilisateurs = [
    { nom: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
    { nom: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
    { nom: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
    { nom: "Bella", profession: "Entrepreneur", profil: "asset/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg" },
];

utilisateurs.forEach((utilisateur) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    const imgBox = document.createElement("div");
    imgBox.classList.add("img");

    const profilImg = document.createElement("img");
    profilImg.src = utilisateur.profil;
    profilImg.alt = `Profil de ${utilisateur.nom}`;

    const emptyDiv = document.createElement("div");
    const nameBox = document.createElement("div");
    nameBox.textContent = utilisateur.nom;
    nameBox.classList.add("nom");

    const professionBox = document.createElement("div");
    professionBox.textContent = utilisateur.profession;
    professionBox.classList.add("profession");

    imgBox.appendChild(profilImg);
    emptyDiv.appendChild(nameBox);
    emptyDiv.appendChild(professionBox);
    cardDiv.appendChild(imgBox);
    cardDiv.appendChild(emptyDiv);

    
});

function ActiveLink() {
    list.forEach((élément) => {
        élément.addEventListener("mouseover", activelink);
    });
}

let navbar = document.querySelector(".navbar");
let bicon = document.querySelector(".bicon");
let main = document.querySelector(".main");

bicon.onclick = function() {
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
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
    
