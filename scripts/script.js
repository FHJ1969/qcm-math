// Je récupère mon bouton lien HTML
let btnDemarrer = document.getElementById('btn-demarrer');

//et je vérifie ici quand si le lien est pressé
//et qu'au moins un des deux choix (btn-debutant/btn-intermediaire) soit pressé le bouton démarrer mène à une page quiz

btnDemarrer.addEventListener('click', function(event) {
    event.preventDefault(); 

    let btnDebutant = document.getElementById('btn-debutant').checked;
    let btnIntermediaire = document.getElementById('btn-intermediaire').checked;

    if (btnDebutant === true) {
        btnDemarrer.link = 'html/quiz-debutant.html';
    } else if (btnIntermediaire === true) {
        btnDemarrer.link = 'tml/quiz-intermediaire.html';
    };
});