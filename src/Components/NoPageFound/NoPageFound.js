import React from 'react';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
    return (
        <div className="" >
            <div className=" h-screen" >
   <h1 className=" text-center text-4xl mt-14">404 | page not found</h1>
   <Link to="/home">
          <div className="text-center mt-8">
          <button style={{transition:"all 0.3s ease-in"}} className="p-3 pl-5 pr-5 text-xl  border-1 ml-7 bg-indigo-600 hover:bg-indigo-200 hover:text-black font-semibold text-center">Go back</button>
          </div>
          </Link>
            </div>
        </div>
    );
};

export default NoPageFound;