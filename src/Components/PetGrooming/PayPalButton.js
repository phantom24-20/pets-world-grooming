import React, { useEffect } from 'react';

const PayPalButton = () => {
  useEffect(() => {
    if (!window.paypal) return;

    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalAmount, // Use the actual total amount here
              },
            },
          ],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          console.log('PayPal Payment Successful:', details);
          history.push('/booking-confirmed'); // Navigate to confirmation page after success
        });
      },
    }).render('#paypal-button-container');
  }, []);

  return (
    <div id="paypal-button-container"></div>
  );
};

export default PayPalButton;
