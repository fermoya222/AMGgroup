const menu = document.getElementById("idMenu");

// Define el contenido del header dinámicamente
const menuContent = `

 <div class="logo">
            <a href="index.html"><img src="img/amg.png" alt="" width="100"></a> 
        </div>
        <ul class="nav-links">
            <li><a href="index.html">INICIO</a></li>
            <li><a href="representados.html">NUESTROS REPRESENTADOS</a></li>
            <li><a href="nosotros.html">NOSOTROS</a></li>
            <!-- <a href="contacto.html" class="contact-button">CONTACTO</a> -->
        </ul>
        <a href="contacto.html" class="contact-button">CONTACTO</a>
    </div>
 `;
menu.innerHTML = menuContent;





document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
     <footer class="footer" id="idFooter">

        <div class="footer-section logo">
            <img src="img/amg.png" alt="AMG Group Logo">
        </div>
        <div class="footer-section contact-info">
            <p><strong>GROUPAMG.INFO@GMAIL.COM</strong></p>
            <p>3515 19-8060 / 3516 32-3650</p>
        </div>
        <div class="footer-section address">
            <p><strong>DUARTE QUIRÓS 1300, CÓRDOBA - ARGENTINA</strong></p>
            <div class="social-icons">
                <a href="https://www.instagram.com/amggroup.ok/"><img src="img/ig.png" width="29" alt="logo-ig"></a>
                <a href="#"><img class="" src="img/wsp.png" width="29" alt="logo-wsp"></a>
                <a href="#"><img class="" src="img/maps.png" width="29" alt="logo-maps"></a>
            </div>
        </div>
    </footer>
    `;
  
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  
    // Actualizar año de copyright dinámicamente
    document.getElementById("copy-year").textContent = new Date().getFullYear();
  });