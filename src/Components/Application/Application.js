import React from 'react';
import location from "../../images/Hand of cartoon person holding cell phone with map application.jpg"
const Application= () => {
    return (
        <div className="lg:grid lg:grid-cols-2 mt-12 p-12">
            <div className="p-9">
            <h1 className="text-4xl font-extrabold">Get More From <span className="text-indigo-600">Our Application</span></h1>
            <p>you can easily order food from our application</p>
            <p className="mt-11 lg:text-2xl sm:text-2xl "><span className="rounded-full bg-indigo-400 p-3 ">1</span> Follow Delivery Status</p>
            <p className="mt-8 lg:text-2xl sm:text-2xl "> <span className="rounded-full bg-indigo-400 p-2">2</span> Order From any location</p>
            <p  className="mt-8 lg:text-2xl sm:text-2xl "><span className="rounded-full bg-indigo-400 p-2">3</span>Get important notices</p>
            </div>
           <div>
               <img className="lg:w-2/3 sm:w-full" src={location} alt="" />

           </div>
        </div>
    );
};

export default Application;