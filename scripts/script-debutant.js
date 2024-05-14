//Je récupère mes éléments HTML

let titreQCM = document.getElementById('titre-qcm');
let inputChiffre = document.getElementById('input-chiffre');
let btnInput = document.getElementById('btn-input');
let formInput = document.getElementById('form-input')
let score = 0;

// Je déclare mes fonctions qui demandent notre calcul et de taper le résultat attendu

function premierCalcul() {
    titreQCM.innerText = "Combien font : 5 + 2"
    btnInput.addEventListener('click',function(event) {
        event.preventDefault();
        if (inputChiffre.value === "7") {
            score++;
            secondCalcul()
        } else {
            secondCalcul()
        }
    })
};

function secondCalcul() {
    titreQCM.innerText = "Combien font : 6 % 2"
    btnInput.addEventListener('click',function(event) {
        event.preventDefault();
        if (inputChiffre.value === "3") {
            score++;
            troisiemeCalcul()
        } else {
            troisiemeCalcul()
        }
    })
};

function troisiemeCalcul() {
    titreQCM.innerText = "Combien font : 3 x 3"
    btnInput.addEventListener('click',function(event) {
        event.preventDefault();
        if (inputChiffre.value === "9") {
            score++;
            affichageResultat()
        } else {
            affichageResultat()
        }
    })
};



function affichageResultat(){
//je vide le formulaire, et le rempli avec mon lien retour au menu 
    formInput.innerHTML = "";
    let lienMenu = document.createElement('a')
    lienMenu.innerText = "Retour au Menu"
    lienMenu.href = "index.html"
    lienMenu.classList.add('lien-menu')
    formInput.appendChild(lienMenu)
//Je change l'affichage du titre selon le score obtenu
    titreQCM.innerText = "Vous avez obtenu un score de " + score + " sur 3,"
    switch (score) {
        case 3:
            titreQCM.innerText += " bravo !"
            break
        case 2:
            titreQCM.innerText += " presque parfait !"
            break
        case 1:
            titreQCM.innerText += " vous pouvez mieux faire."
            break
        case 0:
            titreQCM.innerText += " je vous invite à retenter le test."
            break
    } 
}

// J'appel la fonction premierCalcul
premierCalcul();






