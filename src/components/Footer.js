import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div class="contacto">
                <i className="fas fa-phone-alt"></i>
                <h6>Contactanos </h6>
                <p>5551-444-333</p>
                <br />
                <i className="fas fa-envelope"></i>
                <p>dulces_petalos@gmail.com</p>
            </div>
            <div className="email">
                <p> Dulces Petalos es una marca < br />
                    registrada en México, el uso de <br />
                    este sitio web implica la aceptación<br />
                    los <a href="#">Terminos y Condiciones</a>, asi <br />
                    como del <a href="#">Aviso de Privacidad </a> de <br />
                    'Dulces Petalos'.
                 </p>
                 <br />
                 <p> Gracias por visitarnos</p>

            </div>
            <div className="redes">
            <p> Siguenos en cualquiera <br />
                  de nuestras redes </p>
              <a href="#">  
                <img
                  src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-icono-de-instagram-logo-by-vexels.png"
                  alt="Instagram" />
              </a>
              <a href="#" >
                <img
                  src="https://images.vexels.com/media/users/3/140687/isolated/preview/f705441ceeb70b9920ce6c37d80f5603-linkedin-distorsionado-icono-redondo-by-vexels.png"
                  alt="Linkedin" />
              </a>
              <a href="#" >
                <img
                  src="https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png"
                  alt="Facebook" />
              </a>
              <a href="#">
                <img
                  src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-icono-de-twitter-logo-by-vexels.png"
                  alt="twitter" />
              </a>
            </div>
        </div>
    );
}

export default Footer;