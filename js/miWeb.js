//===================HEADER =================

let miEncabezado = `
<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 4</div>
  <img src="./Img/mick-haupt-fDW-BoHRMKE-unsplash.jpg" style="width:99%">
  <div class="text">Música</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 4</div>
  <img src="./Img/unnamed.jpg" style="width:99%">
  <div class="text">Rock Nacional</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 4</div>
  <img src="./Img/Linkin-Park-comparte-otra-cancion-inedita-de-la-era-Meteora-Fighting-Myself.jpg"
    style="width:99%">
  <div class="text">Rock Internacional</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">4 / 4</div>
  <img src="./Img/Shakira_perform.jpg" style="width:99%">
  <div class="text">Artistas varios</div>
</div>

<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>


</div>

<div style="text-align:center">
<span class="dot" onclick="actualSlide(1)"></span>
<span class="dot" onclick="actualSlide(2)"></span>
<span class="dot" onclick="actualSlide(3)"></span>
<span class="dot" onclick="actualSlide(4)"></span>
</div>
`
document.querySelector("header").innerHTML = miEncabezado;

//====================DIAPOSITIVAS=======================
//Haciendo funcionar las diapositivas

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_image", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_image";
  setTimeout(showSlides, 3500); // Cambia la imagen cada 3.5 segundos
}

//Codigo para pasar las diapositivas manualmente
let carruselIndex = 1;
pasarSlides(carruselIndex);

function plusSlides(n) {
  pasarSlides(carruselIndex += n);
}

function actualSlide(n) {
  pasarSlides(carruselIndex = n);
}

function pasarSlides(n) {
  let i;
  let carrusel = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > carrusel.length) {carruselIndex = 1}    
  if (n < 1) {carruselIndex = carrusel.length}
  for (i = 0; i < carrusel.length; i++) {
    carrusel[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_image", "");
  }
  carrusel[carruselIndex-1].style.display = "block";  
  dots[carruselIndex-1].className += " active_image";
}

//==========================BARRA DE MENÚ RESPONSIVE========================================

/* Cambia entre añadir y remover la clase "responsive" al midnav cuando el usuario cliquea en el icono*/

function miMenu() {
  var x = document.getElementById("navegador");
  if (x.className === "midnav") {
    x.className += " responsive";
  } else {
    x.className = "midnav";
  }
}

function subMenu() {
  document.getElementById("miDropdown").classList.toggle("show");
}

// Cierra el submenú si el usuario da clic fuera de él
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var miDropdown = document.getElementById("miDropdown");
        if (miDropdown.classList.contains('show')) {
        miDropdown.classList.remove('show');
      }
    }
  }


//=====================FOOTER =================================================

let miFooter = `
<div class="footer">
      <div class="logo">
        <img src="./Img/logo-PhotoRoom.png-PhotoRoom.png" alt="logo" style="background-color: #ffffff00; width: 100%;">
      </div>

      <div class="redes">

        <span>SEGUINOS EN:</span>
        <a href="https://facebook.com/" class="facebook" target="_blank">
          <img src="./Img/fb_icon_325x325.png" alt="Facebook" style="width: 3%; background-color: #ffffff00;"></a>
        <a href="https://twitter.com/" class="twitter" target="_blank">
          <img src="./Img/X.gif" alt="X" style="width: 3%; background-color: #ffffff00;"></a>
        <a href="https://www.instagram.com/" class="instagram" target="_blank">
          <img src="./Img/instagram.gif" alt="Instagram" style="width: 3%; background-color: #ffffff00"></a>
      </div>

      <h3>2023 Codo a Codo. Todos los derechos reservados.</h3>
    </div>
`
document.querySelector("footer").innerHTML = miFooter;


//=======================FORMULARIO=================================

const btnEnviar = document.getElementById("enviar");

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById("nombre");
  const apellidoDeUsuario = document.getElementById("apellido");
  const direcciónEmail = document.getElementById("email");

  //Agregamos un mensaje de alerta que obligue al usuario a rellenar los campos

  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre");
    nombre.focus();
    return false;
  }
  if (apellido.value === "") {
    alert("Por favor, escribe tu apellido");
    apellido.focus();
    return false;
  }

    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  return true; //Enviar los datos al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btnEnviar.addEventListener("click", validación);
