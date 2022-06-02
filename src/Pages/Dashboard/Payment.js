import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise=loadStripe('pk_test_51JvwdUAzSHDbJcb5Azl525hYfdIReqAtvUA7AqSZPgJpGtKOBV4RFeXOocta9pZepKbAX5l0MsQlsxzogBVcsSHn00icmxgtXU')
const Payment = () => {
    const {paymentId}=useParams();
    const [appointment,setAppointment]=useState({})
    useEffect(()=>{
            fetch(`http://localhost:9000/appointments/${paymentId}`)
            .then(res=>res.json())
            .then(data=>setAppointment(data))
    },[paymentId])
    return (
        <div>
            <h1>Please Pay For:{appointment.email}{appointment.serviceName}</h1>
            <p>{paymentId}</p>
            <p>$  {appointment.price}</p>
           {
            appointment?.price && <Elements stripe={stripePromise}>
                   <CheckoutForm 
                   appointment={appointment}
                   ></CheckoutForm>
               </Elements>
           }
        </div>
    );
};

export default Payment;