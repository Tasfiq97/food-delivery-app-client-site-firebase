import React from 'react';
import { useState } from 'react/cjs/react.development';
import useData from '../../hooks/useData';
import OfferDetails from '../OfferDetails/OfferDetails';

const Offers = () => {
    const [data]=useData();
  



    return (
        <div className="mt-20" id="offers">
            <h1 className="text-center text-4xl font-extrabold">Our Offers for You</h1>
            <p className="text-center text-3xl  p-5"> we have {data.length} restaurants for your orders</p>
            <div className=" lg:grid  lg:grid-cols-2 gap-4 sm:grid sm:grid-cols-1">
                { data.length===0 ? <div class="flex items-center justify-center space-x-2 animate-pulse">
    <div class="w-8 h-8 bg-indigo-600 rounded-full"></div>
    <div class="w-8 h-8 bg-indigo-600 rounded-full"></div>
    <div class="w-8 h-8 bg-indigo-600  rounded-full"></div>
</div>
                    :
                    data.map(dt=><OfferDetails
                    key={dt.key}
                    dt={dt}
                    ></OfferDetails>)
                }
            </div>
        </div>
    );
};

export default Offers;