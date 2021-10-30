import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {user,googleSignIn}=useAuth()
const history=useHistory()
const location=useLocation()
const redirect=location.state?.from || "/home"
const handleSignIn=()=>{
    googleSignIn()
    .then(result=>{
           history.push(redirect);
        
    })
}
    return (
        <div className="mt-12">
            <h1 className="text-center text-4xl font-semibold">Please <span className="text-indigo-600">Login</span>  For Order</h1>
              <div className="text-center border-2 mb-20 lg:w-1/2 ml-auto mr-auto mt-14 ">
                  <h4 className="p-14 text-3xl">please login for placing your order</h4>
                  <button onClick={handleSignIn} style={{transition:"all 0.2s ease-in"}} className="border-2 p-3 pl-14 pr-14 mt-4 mb-7 bg-gray-200 font-semibold hover:bg-indigo-600 text-2xl"><FontAwesomeIcon className="text-red-500" icon={faGoogle}/> Sign Up with Google</button>
              </div>
        </div>
    );
};

export default Login;