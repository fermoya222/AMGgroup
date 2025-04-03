const menu = document.getElementById("idMenu");

// Define el contenido del header dinámicamente
const menuContent = `

 <div class="logo">
            <a href="index.html"><img src="img/amg.png" alt="Logo"></a>
        </div>

        <button class="menu-toggle" onclick="toggleMenu()">
            <div></div>
            <div></div>
            <div></div>
        </button>

        <ul class="nav-links">
            <li><a href="index.html">INICIO</a></li>
            <li><a href="representados.html">NUESTROS REPRESENTADOS</a></li>
            <li><a href="nosotros.html">NOSOTROS</a></li>
            <li><a href="contacto.html" class="contact-button">CONTACTO</a></li>
        </ul>
 `;
menu.innerHTML = menuContent;

document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
   
          <footer class="footer  text-white text-center py-3" id="idFooter">
      <div class="container">
        <div class="row text-center text-md-start">
        
          <div class="col-12 col-md-4 mb-3 footer-section logo">
            <img src="img/amg.png" alt="AMG Group Logo" class="img-fluid" />
          </div>
          <div class="col-12 col-md-4 mb-3 footer-section contact-info">
            <p><strong>GROUPAMG.INFO@GMAIL.COM</strong></p>
            <p>3515 19-8060 / 3516 32-3650</p>
          </div>
          <div class="col-12 col-md-4 footer-section address">
            <p><strong>DUARTE QUIRÓS 1300, CÓRDOBA - ARGENTINA</strong></p>
            <div class="social-icons d-flex justify-content-center">
              <a href="https://www.instagram.com/amggroup.ok/" class="me-2"><img src="img/ig.png" width="29" alt="logo-ig"></a>
              <a href="#" class="me-2"><img src="img/wsp.png" width="29" alt="logo-wsp"></a>
              <a href="#"><img src="img/maps.png" width="29" alt="logo-maps"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Actualizar año de copyright dinámicamente
  document.getElementById("copy-year").textContent = new Date().getFullYear();
});
