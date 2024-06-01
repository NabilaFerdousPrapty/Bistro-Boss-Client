import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
import CheckoutForm from './CheckoutForm/CheckoutForm';
const Payment = () => {

    
    return (
        <div>
            <SectionTitle  heading="---Hurry Up!---" subHeading='PAYMENT'/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Payment</h4>
                               
                            </div>
                            <Elements stripe={stripePromise}>
                            <CheckoutForm/>
                            </Elements>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Payment;