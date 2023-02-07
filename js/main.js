// Consegna:
// Dato un array di oggetti letterali con:
// - url dell'immagine
//     - titolo
//     - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il ** ciclo infinito ** del carosello.Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails(sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo(3 secondi) l'immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start / stop e di inversione del meccanismo di autoplay.

// DATO UN ARRAY DI OGGETTI LETTERALI CON:
// - URL DELL'IMMAGINE
// - TITOLO
// - DESCRIZIONE
// CREARE UN CAROSELLO COME NELLA FOTO ALLEGATA.

const imagesInfo = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const container = document.getElementById("container");
container.innerHTML +=
    `
    <div class="row gx-0">
        <div class="col-9">
            <img class="w-100 h-100 big-image rounded-start" id="bigImage" src="./img/01.webp" alt="img1">
        </div>
        <div class="col-3">
            <img class="w-100 small-image" id="imgDescription" src="./img/01.webp" alt="img1">
            <img class="w-100 small-image" id="imgDescription" src="./img/02.webp" alt="img2">
            <img class="w-100 small-image" id="imgDescription" src="./img/03.webp" alt="img3">
            <img class="w-100 small-image" id="imgDescription" src="./img/04.webp" alt="img4">
            <img class="w-100 small-image" id="imgDescription" src="./img/05.webp" alt="img5">
            <button type="button" class="btn btn-light rounded-circle first-button" id="upButton">
                <i class="fa-solid fa-angle-up"></i>
            </button>
            <button type="button" class="btn btn-light rounded-circle second-button" id="downButton">
                <i class="fa-solid fa-angle-down"></i>
            </button>
        </div>
    </div>
    `

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il ** ciclo infinito ** del carosello.Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp",];

currentImage = 0;

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const bigImage = document.getElementById("bigImage");

upButton.addEventListener(
    "click",
    function () {
        currentImage = (currentImage + images.length - 1) % images.length;
        bigImage.src = images[currentImage];
    }
);

downButton.addEventListener(
    "click",
    function () {
        currentImage = (currentImage + 1) % images.length;
        bigImage.src = images[currentImage];
    }
);