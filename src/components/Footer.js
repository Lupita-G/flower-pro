import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div class="contacto">
          <i className="fas fa-phone-alt"></i>
          <h6>Lupita Guzmán </h6>
          <p>5551-444-333</p>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          <p>dulces_petalos@gmail.com</p>
        </div>
        <div className="redes">
          <div>
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

        </div>
    );
}

export default Footer;