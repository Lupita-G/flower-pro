import React from 'react';
import '../styles/PaymentCard.css';

function PaymentCard (props) {
    return (
        <div className="paymentCard">
          <figure>
            <img src={props.src} alt="icon"/>
          </figure>
          <div className="content">
            <p className="info">{props.info}</p>
          </div>
        </div>
    );
}

export default PaymentCard;