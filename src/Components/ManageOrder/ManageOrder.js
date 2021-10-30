import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

const ManageOrder = () => {
    const [manageOrders,setManageOrders]=useState([]);
    const {user}=useAuth()

    useEffect(()=>{
        axios.get("http://localhost:5000/manageOrder")
        .then(result=>{
            const data=result.data;
            console.log(data)
           const filterOrder=data.filter(dt=> dt.email===user.email)
                setManageOrders(filterOrder);
               
        });
    },[user])

   
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mb-20 mt-16">Your All orders</h1>
            <div className="lg:grid lg:grid-cols-2 mb-32">
            {
                manageOrders.map(items=>{
                    return(
                       

                            <div className="lg:flex mb-5 justify-center items-center" key={items.orders?._id}>
                                <img className="lg:w-1/3" src={items.orders?.image} alt="" />
                            <div>
                            <h1 className="text-3xl text-indigo-600 font-semibold ml-7">{items.orders?.foodName}</h1>
                            <p className="text-3xl text-black font-semibold p-7"> $: {items.orders.price}</p>
                            <button  style={{transition:"all 0.3s ease-in"}} className="p-2 pl-4 pr-4 text-xl  border-1 ml-7 bg-indigo-600 hover:bg-indigo-200 hover:text-black font-semibold">Cancel</button>
                            </div>
                            </div>

                    )
                })
            }
            
            </div>
        </div>
    );
};

export default ManageOrder;