import React from 'react';


const Header = () => {
   
    return (
        <div >
<nav className="lg:flex justify-between items-center p-5">
    <div>
        <h1 className="lg:text-3xl font-semibold sm:text-2xl"> <span className="text-indigo-600 font-bold ">Expressos</span>  delivery system</h1>
    </div>
    <div className="lg:flex list-none">
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2   hover:bg-indigo-600 rounded">Home</li>
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded">Order Info</li>
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded">Manage Orders</li>
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded">All Orders</li>
    </div>
</nav>



        </div>
    );
};

export default Header;