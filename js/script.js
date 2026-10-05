//Crée une variable cv qui sera accessible en dehors des fonctions
//let cv;

async function loadCV() {

    //response représente la réponse du serveur. Elle contient notamment le contenu de ton fichier JSON.
    //Mais ce contenu n'est pas encore directement utilisable comme objet JavaScript.
    const response = await fetch("data/cv.json");

    //Attends que le JSON soit récupéré et transformé (await), puis stocke le résultat dans une constante appelée cv
    const cv = await response.json();

    //On affiche dans la console le prénom
    console.log(cv.personal.firstName);
    //console.log(cv);

    return cv;
}

async function main() {

    const cv = await loadCV();

    console.log(cv);

    // Plus tard :
    // displayPersonalInfo(cv.personal);
    // displaySkills(cv.skills);
    // displayExperiences(cv.experiences);
}

main();






//const nomElement = document.createElement("h2");
//nomElement.innerText = cv.firstName;
//const sectionFiches = document.querySelector(".sectionprofile");
//sectionFiches.appendChild(nomElement);