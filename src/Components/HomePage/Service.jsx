import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    let [ services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='text-center space-y-5'>
                <h1 className='text-2xl text-error font-bold'>Service</h1>
                <h1 className='text-4xl font-semibold'>Our Service Area</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            </div>

            <div className='grid grid-cols-3 gap-5 my-5'>
                {
                    services.map(service => <div key={service._id}>
                        <div  className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={service.img} />
                            </figure>
                            <div className="card-body  text-left">
                                <h2 className="card-title">{service.title}</h2>
                                <p className='text-error'>Price : {service.price}</p>
                                <div className="card-actions flex justify-end">
                                    <Link to={`/checkout/${service._id}`}><button className="btn btn-primary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Service;