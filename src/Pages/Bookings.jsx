import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserProvider/UserProvider';
import ShowBookings from '../Components/ShowBookings/ShowBookings';

const Bookings = () => {

    let [bookings, setBookings] = useState([]);
    let { user } = useContext(UserContext);

    // console.log(bookings);

    let URL = `http://localhost:3000/checkout?email=${user.email}`

    useEffect(() => {
        fetch(URL,{
            method: 'GET',
            headers :{ authorization : `bearer ${localStorage.getItem('AT')}`}
            
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [URL])

    let remove = id =>{
       
        let proceed = confirm('Are you sure?')
        if(proceed){
            fetch(`http://localhost:3000/checkout/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data);
                alert('Delete Successfully')
                let remainingCheckout = bookings.filter(booking => booking._id != id);
                setBookings(remainingCheckout)
            })

        }

    }

    let update = id =>{
        console.log(id);
        fetch(`http://localhost:3000/checkout/${id}`,{
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        'body': JSON.stringify({status: "confirm"})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
               let remaining = bookings.filter(booking => booking._id != id)
               let updatedCheckout= bookings.find(booking => booking._id == id )
                updatedCheckout.status = 'Confirmed'
                let newCheckout = [updatedCheckout, ...remaining]
                setBookings(newCheckout)
            }
        })
    }


   
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center'>Your Bookings</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Due Amount</th>
                            <th>Order</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <ShowBookings update={update} booking={booking} remove={remove} key={booking._id}></ShowBookings>)
                        }


                    </tbody>


                </table>
            </div>




        </div>
    );
};

export default Bookings;