import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OfferDetails = ({dt}) => {
    const {name,image,open,time,key}=dt;

    return (
        <div className="p-12">
            <div className="border-2">
                <img style={{transition:"all 0.3s ease-in"}}   className="h-4/6 rounded-lg" src={image} alt="" />
           <div className="p-10 bg-indigo-100">
           <h1 className="text-3xl">{name}</h1>
            <p className="text-2xl text-red-500">  {open}</p>
            <p className="p-2"> <FontAwesomeIcon icon={faClock}/> {time}</p>
            <Link to={`/orderdetail/${key}`}>
            <button style={{transition:"all 0.3s ease-in"}} className="p-5 mt-5 text-white border-1 bg-indigo-600 hover:bg-indigo-200 hover:text-black">Place Order</button>
            </Link>
           </div>
            </div>
           
        </div>
    );
};

export default OfferDetails;