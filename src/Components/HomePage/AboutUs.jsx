import React from 'react';
import person from '../../../public/assets/images/about_us/person.jpg';
import parts from '../../../public/assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl " />
                    <img src={parts} className="max-w-sm rounded-lg  absolute right-0 top-1/2 border-white border-8" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl text-error font-bold my-5'>About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn btn-error">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;