import React from 'react';
import '../styles/PaymentContainer.css';
import PaymentCard from './PaymentCard';

const PaymentContainer = () => {
    return (
        <div className='paymentContainer'>
            <PaymentCard />
            <PaymentCard />
            <PaymentCard />

        </div>
    );
}

export default PaymentContainer;