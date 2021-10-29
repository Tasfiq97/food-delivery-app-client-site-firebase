import React from 'react';
import pizza from "../../images/pexels-narda-yescas-1566837.jpg"

const Service = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 p-11 bg-black text-white gap-x-2.5 mt-10 ">
            <div>
            <h1 className="text-indigo-600 text-4xl font-extrabold">Always </h1>
            <h1 className="text-indigo-600 text-4xl font-extrabold">Order</h1>
            <h1 className="text-4xl font-extrabold">best pizza from Us</h1>
            <p className="mt-5 lg:pr-7">Pizza is one of the most popular foods in the world, and for good reason! It’s affordable, delicious, and there’s an option for everyone.And it’s not just popular in pizza parlors. It’s popular in Instagram too!Did you know that #pizza has been used on over 40 million posts? For some perspective, #sushi has under 25 million, #burger has less than 15 million, and #tacos has under 8 million. Pizza is clearly one of the most beloved foods on Instagram. It photographs well and there it can be made in infinite varieties.But don’t just depend on those beauty shots or slow-mo cheese pulls to get attention to your Instagram posts. You need a snappy caption to go with that gooey goodness. I know it can get tedious, trying to think of something clever to say on every single post. So here is a list of 97 pizza captions for Instagram, all about the perfect pie!</p>
            </div>
            <div>
                <img className=" lg:p-10 lg:w-full sm:mt-6 " src={pizza} alt="" />
            </div>
           
        </div>
    );
};

export default Service;