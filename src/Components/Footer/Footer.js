import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="text-center bg-black text-white p-10 mt-20">
            <div>
                <h1 className="text-4xl">Call Us for Order</h1>
                <h4 className="text-3xl text-red-500 mt-2">+880-173221344</h4>

            </div>
            <div className="mt-5">
                <h1 className="text-indigo-600 text-4xl font-extrabold">Expressos Delivery</h1>
                <p className="p-3">Give our clients the earliest delivery consistent with quality - whatever the inconvenience to us.</p>
            </div>
            <div>
                <button  className="p-5 lg:text-2xl"><FontAwesomeIcon style={{transition:"all 0.3s ease-in-out"}} className="hover:text-indigo-600" icon={faFacebook}/></button>
                <button className="p-5 lg:text-2xl"><FontAwesomeIcon  style={{transition:"all 0.3s ease-in"}} className="hover:text-indigo-600"  icon={faYahoo}/></button>
                <button  className="p-5 lg:text-2xl"><FontAwesomeIcon style={{transition:"all 0.3s ease-in"}} className="hover:text-red-500"  icon={faInstagram}/></button>
                <button  className="p-5 lg:text-2xl"><FontAwesomeIcon style={{transition:"all 0.3s ease-in"}} className="hover:text-indigo-800"  icon={faTwitter}/></button>
            </div>
            <hr />
            <p>&copy; all rights resereved by expressos || 2021</p>
        </div>
    );
};

export default Footer;