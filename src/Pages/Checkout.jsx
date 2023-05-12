import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    let service = useLoaderData()
    let {title} =service
    return (
        <div>
            <h1>Checkout {title}</h1>
            
        </div>
    );
};

export default Checkout;