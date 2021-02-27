import React from 'react';
import '../styles/PaymentCard.css';

function PaymentCard (props) {
    return (
        <div className="paymentCard">
          <figure>
            <img src={props.src} alt="icon"/>
          </figure>
          <div className="content">
            <p>{props.info}</p>
            <p>{props.infoone} </p>
            <p>{props.infotwo}</p>
          </div>
        </div>
    );
}

export default PaymentCard;