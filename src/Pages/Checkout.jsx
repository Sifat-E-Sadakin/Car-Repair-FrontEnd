import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';

const Checkout = () => {
    let service = useLoaderData()
    let { title , img} = service
    let {user}= useContext(UserContext);

    let handelCheckout = event =>{
        event.preventDefault();

        let name = event.target.name.value;
        let date = event.target.date.value;
        let email= event.target.email.value;
        let amount = event.target.amount.value;

        let objectCheckout = {displayName: name, date, email, amount, serviceName:  title, serviceImg: img}
        console.log(objectCheckout);

        fetch('http://localhost:3000/checkout', {
            method:'POST',
            "headers":{
                'content-type': 'application/json'
            },
            "body": JSON.stringify(objectCheckout)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
        })


    }


    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-center my-10'>Checkout {title}</h1>

            <div className='flex justify-center bg-slate-100 '>
                <form className='w-full' onSubmit={handelCheckout} >
                    <div className='flex justify-evenly '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' placeholder="Date" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>  <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deu Amount </span>
                            </label>
                            <input type="number" name='amount' placeholder="Deu Amount" className="input input-bordered" />
                        </div>
                    </div>
                    <div className=" mt-6 flex justify-center">
                       <input type="submit" value='CheckOut' className='btn btn-wide btn-error' />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Checkout;