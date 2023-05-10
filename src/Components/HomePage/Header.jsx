import React from 'react';
import img6 from '../../../public/assets/images/banner/6.jpg'
import img5 from '../../../public/assets/images/banner/5.jpg'
import img4 from '../../../public/assets/images/banner/4.jpg'
import img3 from '../../../public/assets/images/banner/3.jpg'
import img2 from '../../../public/assets/images/banner/2.jpg'
import img1 from '../../../public/assets/images/banner/6.jpg'

const Header = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={img6} className=" h-[600px] w-full" />
                  
                    <div className="absolute space-y-5 flex flex-col  w-1/2 justify-center   h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        
                       <h1 className='ml-10 text-white text-5xl font-bold'>Affordable Price for Car Servicing</h1>
                       <p className=' ml-10 text-white'> There are many variations of passage of available, but the majority have suffered alteration in some form </p>
                       <div className='ml-10 space-x-3'>
                        <button className='btn btn-error'>Discover More</button>
                        <button className='btn btn-outline text-white'>Latest Projects</button>
                       </div>
                     </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-20 bottom-7">

                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={img5} className=" h-[600px] w-full" />
                  
                    <div className="absolute space-y-5 flex flex-col  w-1/2 justify-center   h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        
                       <h1 className='ml-10 text-white text-5xl font-bold'>Affordable Price for Car Servicing</h1>
                       <p className=' ml-10 text-white'> There are many variations of passage of available, but the majority have suffered alteration in some form </p>
                       <div className='ml-10 space-x-3'>
                        <button className='btn btn-error'>Discover More</button>
                        <button className='btn btn-outline text-white'>Latest Projects</button>
                       </div>
                     </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-20 bottom-7">

                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src={img4} className=" h-[600px] w-full" />
                  
                    <div className="absolute space-y-5 flex flex-col  w-1/2 justify-center   h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        
                       <h1 className='ml-10 text-white text-5xl font-bold'>Affordable Price for Car Servicing</h1>
                       <p className=' ml-10 text-white'> There are many variations of passage of available, but the majority have suffered alteration in some form </p>
                       <div className='ml-10 space-x-3'>
                        <button className='btn btn-error'>Discover More</button>
                        <button className='btn btn-outline text-white'>Latest Projects</button>
                       </div>
                     </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-20 bottom-7">

                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <img src={img3} className=" h-[600px] w-full" />
                  
                    <div className="absolute space-y-5 flex flex-col  w-1/2 justify-center   h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        
                       <h1 className='ml-10 text-white text-5xl font-bold'>Affordable Price for Car Servicing</h1>
                       <p className=' ml-10 text-white'> There are many variations of passage of available, but the majority have suffered alteration in some form </p>
                       <div className='ml-10 space-x-3'>
                        <button className='btn btn-error'>Discover More</button>
                        <button className='btn btn-outline text-white'>Latest Projects</button>
                       </div>
                     </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-20 bottom-7">

                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full ">
                    <img src={img2} className=" h-[600px] w-full" />
                  
                    <div className="absolute space-y-5 flex flex-col  w-1/2 justify-center   h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        
                       <h1 className='ml-10 text-white text-5xl font-bold'>Affordable Price for Car Servicing</h1>
                       <p className=' ml-10 text-white'> There are many variations of passage of available, but the majority have suffered alteration in some form </p>
                       <div className='ml-10 space-x-3'>
                        <button className='btn btn-error'>Discover More</button>
                        <button className='btn btn-outline text-white'>Latest Projects</button>
                       </div>
                     </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-20 bottom-7">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full ">
                    <img src={img1} className=" h-[600px] w-full" />
                  
                    <div className="absolute space-y-5 flex flex-col  w-1/2 justify-center   h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        
                       <h1 className='ml-10 text-white text-5xl font-bold'>Affordable Price for Car Servicing</h1>
                       <p className=' ml-10 text-white'> There are many variations of passage of available, but the majority have suffered alteration in some form </p>
                       <div className='ml-10 space-x-3'>
                        <button className='btn btn-error'>Discover More</button>
                        <button className='btn btn-outline text-white'>Latest Projects</button>
                       </div>
                     </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-20 bottom-7">

                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Header;