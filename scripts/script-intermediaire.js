//Je récupère mes éléments HTML

let titreQCM = document.getElementById('titre-qcm');
let inputChiffre = document.getElementById('input-chiffre');
let btnInput = document.getElementById('btn-input');
let formInput = document.getElementById('form-input')
let score = 0;
let currentCalcul = 1;

// Je déclare mes fonctions qui demandent notre calcul et de taper le résultat attendu

function calcul(event) {
    event.preventDefault();
    if (currentCalcul === 1) {
        if (inputChiffre.value === "135") {
            score++;
        }
        currentCalcul = 2;
        secondCalcul();
    } else if (currentCalcul === 2) {
        if (inputChiffre.value === "21") {
            score++;
        }
        currentCalcul = 3;
        troisiemeCalcul();
    } else if (currentCalcul === 3) {
        if (inputChiffre.value === "108") {
            score++;
        }
        currentCalcul = 4;
        affichageResultat();
    }
    inputChiffre.value = "";
}

function premierCalcul() {
    titreQCM.innerText = "Combien font : 15(2+7)"
};

function secondCalcul() {
    titreQCM.innerText = "Combien font : 9 ÷ 3 x 7"
};

function troisiemeCalcul() {
    titreQCM.innerText = "Combien font : 3 x 3 x 3 x 4"
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






