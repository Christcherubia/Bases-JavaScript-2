// SELECTEURS

// document.querySelector('h4').style.background="yellow"; // tout les attribut CSS peuvent être insérer ici !
// const baliseHTMLh4 = document.querySelector('h4');
// console.log(baliseHTMLh4);
// baliseHTMLh4.style.background = "red";

// Click Events
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');


console.log(btn1, btn2);

questionContainer.addEventListener("click", () => { // c'est comme ça que l'on écrit un evenement
    questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
   response.classList.add('show-response');
   response.style.background = "green";
   
});

btn2.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = "red";
});
// En CSS la <div> (si on écrit dedans) est supérieur à l'#id > la .classe > les balisesHTML 
//attention quand on veut injecter dans le JS 

//----------------------------------------------------------------
//MOUSE Events

const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    
});

window.addEventListener('mousedown', () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener('mouseup', () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)"
});

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "black";
});

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mkv";
    console.log(audio.src);
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if (e.key === "j") {
        keypressContainer.style.background = "purple";
    } else if (e.key === "h") {
        keypressContainer.style.background = "blue";
    } else {
        keypressContainer.style.background = "red";
    }
    if (e.key === "s") ring(e.key);
});

//----------------------------------------
// Scroll Event

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);

   if (window.scrollY > 120) {
    nav.style.top = 0;
   } else {
    nav.style.top = "-50px";
   }
});

// --------------------------------------
// Form Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector('form')
let pseudo = "";    
let language = "";



inputName.addEventListener('input', (e) => { // Sur les "input" tout est toujours ou presque comme coder comme ça
    pseudo = e.target.value; 
});

select.addEventListener('input', (e) => {
   language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); //En général pour travailler sur les formulaire on met cette methode "e.preventDefault"
   

    if (cgv.checked) { // innerHTML pour injecter ce que contien les balises et textContent pour afficher ces dernières.
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Language préféré : ${language}</h4>`;  // *Cette pratique fonctionne, mais ce n'est pas très recommandé
        
        
    } else {
        alert('veuillez accepter les CGV !');
    }
});

//----------------------------------------------
//Load Event (une fois que la page à été charger)
window.addEventListener('load', () => {
    console.log("Document chargé !");g
})



