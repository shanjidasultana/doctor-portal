import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CircularProgress } from '@material-ui/core';

const CheckoutForm = ({appointment}) => {
    const {price,patientName,email,_id}=appointment;
    const stripe=useStripe();
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('')
    const [proccessing,setProccessing]=useState(false)
    const elements=useElements();
    const [secret,setSecret]=useState('')
    useEffect(()=>{
        fetch('http://localhost:9000/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>setSecret(data.clientSecret))
    },[price])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card=elements.getElement(CardElement);
        if(card===null){
            return;
        }
        setProccessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
           setError(error.message);
           setProccessing(false)
           setSuccess('')
        }
        else{
            setError('')
            // console.log(paymentMethod);
        }
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            secret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:patientName,
                  email:email,
                },
              },
            },
          );
          if(intentError){
              setSuccess('')
              setError(intentError.message)
          }
          else{
              setError('')
              setSuccess('Your payment process successfully')
              console.log(paymentIntent);
            setProccessing(false)


              const payment={
                amount:paymentIntent.amount,
                created:paymentIntent.created,
                last4:paymentMethod.card.last4,
                transaction:paymentIntent.client_secret.slice('_secret')[0]
              }
              const url=`http://localhost:9000/appointments/${_id}`
              fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data));
          }
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            {proccessing? <CircularProgress></CircularProgress>:<button type="submit" disabled={!stripe ||success}>
               Pay   ${price}
            </button>}
        </form>
        {
            error && <p style={{color:'red'}}>{error}</p>
        }
        {
            success && <p style={{color:'green'}}>{success}</p>
        }
        </div>
    );
};

export default CheckoutForm;