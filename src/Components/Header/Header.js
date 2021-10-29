import React from 'react';


const Header = () => {
   
    return (
        <div  >
<nav className="lg:flex bg-white justify-between items-center p-5">
    <div>
        <h1 className="lg:text-3xl font-semibold sm:text-2xl"> <span className="text-indigo-600 font-bold ">Expressos</span></h1>
        <h3 className="text-2xl font-semibold">Delivery</h3>
    </div>
    <div className="lg:flex list-none">
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2   hover:bg-indigo-600 rounded">Home</li>
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded">Order Info</li>
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded">Manage Orders</li>
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded">All Orders</li>
        <button style={{transition:"all 0.3s ease-in"}} className="p-2 text-white mt-4 border-1 bg-indigo-600 hover:bg-indigo-200 hover:text-black">Sign in</button>
    </div>
</nav>



        </div>
    );
};

export default Header;