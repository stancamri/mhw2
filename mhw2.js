
const bottone = document.querySelector("#accediLink");
bottone.addEventListener("click", cliccato);

function cliccato(){
    modale.style.display ="block"
}

const imgChiudiModale = document.createElement("img");
imgChiudiModale.src ="fotox-1.jpeg";
imgChiudiModale.classList.add("img-chiudi-modale");
imgChiudiModale.addEventListener("click", chiudix);
function chiudix(){
    modale.style.display ="none"
}
document.getElementById("chiudiModaleContainer").appendChild(imgChiudiModale)


const apriModaleCerca = document.getElementById('apriModaleCerca');
const modaleCerca = document.getElementById('modaleCerca');
const chiudiModaleCerca=document.getElementById("chiudiModaleCerca");


apriModaleCerca.addEventListener("click", cliccat);
function cliccat(){
    modaleCerca.style.display="block";
}
chiudiModaleCerca.addEventListener("click", clic);
function clic(){
    modaleCerca.style.display="none"
}

const nav = document.querySelector('nav');
const navPosition=nav.offsetTop;
const flexContaine3 = document.querySelector("#flex-containe3");
const logo = document.querySelector('#logo');

window.addEventListener('scroll', scendi);
   
function scendi(){
    if (window.scrollY > navPosition) {
      nav.classList.add('scrolled');
      flexContaine3.style.display="none";
      logo.classList.add('logo-nav');

    } else {
      nav.classList.remove('scrolled');    
      flexContaine3.style.display="";
      logo.classList.remove('logo-nav');
    }
  }


  


