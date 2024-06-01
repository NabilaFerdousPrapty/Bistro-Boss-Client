import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import  { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import UseCart from './../../../../hooks/UseCart';
import useAuth from './../../../../hooks/UseAuth';
import { Swal } from 'sweetalert2';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [transactionId, setTransactionId] = useState('');
    const {user}=useAuth();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [refetch, cart] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
              if(totalPrice > 0){
                const response = await axiosSecure.post('/create_payment_intent', { price: totalPrice });
                setClientSecret(response.data.clientSecret);
              }
            } catch (err) {
                console.error('Error creating payment intent:', err);
                setError('Failed to create payment intent. Please try again later.');
            }
        };

        createPaymentIntent();
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log("Error in", error);
            setError(error.message);
        } else {
            console.log("Payment method", paymentMethod);
            setError('');
        }
        //confirm payment
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:card,
                billing_details:{
                  name:user?.displayName || 'Anonymous',
                  email:user?.email || 'Anonymous'
                }
            },
        });
        if (paymentError) {
            console.error('Error in payment:', paymentError);
            setError(paymentError.message);
        } else {
            console.log('Payment confirmed:', paymentIntent);
            setError('');
            if (paymentIntent.status === 'succeeded') {
                console.log('Payment successful');
                console.log(`${paymentIntent.id} is the payment intent id`);
              //  alert(`Payment successful. Payment intent id: ${paymentIntent.id}`);
              setTransactionId(paymentIntent.id);
              const payment = {
                email: user?.email || 'Anonymous',
                price: totalPrice,
                date: new Date().toISOString(),
                cartIds: cart.map(item => item._id),
                menuItemIds: cart.map(item => item.menuId),
                status: 'pending',
                transactionId: paymentIntent.id,
              };
            
              const res = await axiosSecure.post('/payments', payment);
              console.log('Payment saved', res.data);
              if (res.data.paymentResult.insertedId) {
                alert('Payment successful');
                
              }
              refetch()



            }
        }



    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    className="btn btn-sm bg-[#D1A054]"
                    disabled={!stripe || !clientSecret }
                >
                    Pay
                </button>
                <p className="text-red-600">
                    {error}
                </p>
                {
                  transactionId && <p className="text-green-400">
                  Payment successful. Payment intent id: {transactionId}
                  </p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;
