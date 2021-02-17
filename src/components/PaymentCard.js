import React from 'react';
import '../styles/PaymentCard.css';

const PaymentCard = () => {
    return (
        <div className="paymentCard">
          <figure>
            <img src="https://cdn.shopify.com/s/files/1/0246/7551/6468/files/iconos-02_100x100.png?v=1582599069" alt="icon car"/>
          </figure>
          <div className="content">
            <p>Envio GRATIS</p>
            <p>arriba de $999</p>
            <p>MXN</p>
          </div>
        </div>
    );
}

export default PaymentCard;