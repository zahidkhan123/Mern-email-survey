import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../store/actions';

const Payments = () => {

const dispatch = useDispatch()


  return (
      <StripeCheckout name='Emaily'
      description='$5 for 5 emails'
       amount={500}
       token={(token) => dispatch(handleToken(token))}
       stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn'>Add Credits</button>
    </StripeCheckout>
    
  );
};

export default Payments;
