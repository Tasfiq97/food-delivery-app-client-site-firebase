import React from 'react';
import { HashLink } from 'react-router-hash-link';
import bg from "../../images/pexels-cottonbro-4604599.jpg"

const Banner = () => {
    return (
        <div id="home" style={{background:`linear-gradient(50deg, rgba( 0, 0, 0,0.68) 60%, rgba(0,0,0,0.68) 40%),url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundAttachment:"fixed"}} className="flex justify-center items-center text-white p-11 ">
            <div className="p-8 lg:mt-28 mb-10">
            <h3>Welcome to</h3>
<h1 className="lg:text-6xl font-semibold "> <span className="text-indigo-600 font-extrabold">Expressos</span></h1>
<h1 className="lg:text-6xl font-semibold ">Delivery</h1>
<p className="mt-2">Serving a lip-smacking food is our one and only passion.</p>
            <p className="mt-5">100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun ,all the food you want ,we deliver you perfectly,we are here to serve  </p>
           <HashLink to="#offers">
           <button style={{transition:"all 0.3s ease-in"}} className="p-4 pl-8 pr-8 text-2xl mt-5 border-1 bg-indigo-600 hover:bg-indigo-200 hover:text-black">Our Offers</button>
           </HashLink>
            </div>
           
        </div>
    );
};

export default Banner;