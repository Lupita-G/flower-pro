import React from 'react';
import '../styles/PaymentContainer.css';
import PaymentCard from './PaymentCard';

const PaymentContainer = () => {
    return (
        <div className='paymentContainer'>
            <PaymentCard info="Envio Gratis" infoone="arriba de $999" infotwo="MXN" src="https://cdn.shopify.com/s/files/1/0246/7551/6468/files/iconos-02_100x100.png?v=1582599069"  />
            <PaymentCard info="Pago 100% Seguro" src="https://cdn.shopify.com/s/files/1/0246/7551/6468/files/iconos-03_100x100.png?v=1582599175"/>
            <PaymentCard info="Garantia de" infoone="satisfacción" src="https://cdn.shopify.com/s/files/1/0246/7551/6468/files/iconos-04_100x100.png?v=1582599189"/>

        </div>
    );
}

export default PaymentContainer;