import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const {user,logOut}=useAuth()
   
    return (
        <div>
<nav className="lg:flex bg-white justify-between items-center p-5">
    <div>
       <NavLink to="/home">
       <h1 className="lg:text-3xl font-semibold sm:text-2xl"> <span className="text-indigo-600 font-bold ">Expressos</span></h1>
       </NavLink>
        <h3 className="text-2xl font-semibold">Delivery</h3>
    </div>
    <div className="lg:flex list-none">
       <Link to="/home"> 
       <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2   hover:bg-indigo-600 rounded text-2xl">Home</li>
       </Link>
        <HashLink to="/home#offers">
        <li  style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2   hover:bg-indigo-600 rounded text-2xl">Offers</li>
        </HashLink>
 
           {user?.email ?
           <>
          <Link to="/manageOrder">
          <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded text-2xl">My Orders</li>
          </Link>
        <Link to="/allOrders">
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded text-2xl">Manage All Orders</li>
        </Link>
        <li style={{transition:"all 0.3s ease-in",cursor:"pointer"}}  className="mr-8 mt-4 p-2  hover:bg-indigo-600 rounded text-2xl">Add a new Service</li>
        <span className="mt-4 p-2 text-xl">{user.displayName}</span>
           </>
    :" "}
       { user?.email ? <button onClick={logOut} style={{transition:"all 0.3s ease-in"}} className="p-2 text-white mt-4 border-1 bg-indigo-600 hover:bg-indigo-200 hover:text-black">Logout</button>
       : <Link to="/login">
       <button style={{transition:"all 0.3s ease-in"}} className="p-2 text-white mt-4 border-1 bg-indigo-600 hover:bg-indigo-200 hover:text-black text-2xl">Sign Up</button>
       </Link>}
    </div>
</nav>



        </div>
    );
};

export default Header;