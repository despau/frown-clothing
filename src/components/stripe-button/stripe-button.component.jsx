import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton= ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_SDOzLnSr3nKFEtZbnw8r2mnE004oTzYkuz'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            labele='Pay Now'
            name='FRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;