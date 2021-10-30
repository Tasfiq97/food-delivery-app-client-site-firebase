import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const AllOrders = () => {

    const [allOrders,setAllOrders]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:5000/manageOrder")
    .then(result=>setAllOrders(result.data))
    },[])


    const handleDelete=(id)=>{
      
        const proceed=window.confirm("are you sure uou want to cancel?");
        if(proceed){
           fetch(`http://localhost:5000/deleteOrder/${id}`,{
               method:"DELETE",
                headers:{"content-type":"application/json"},
           })
           .then(res=>res.json())
           .then(data=>{
               if(data.deletedCount>0){
                   alert("Your Order Has Cancelled")
                   const remainings=allOrders.filter(order=>order._id!= id)
                   setAllOrders(remainings);
               }
               
           })
        }
         
   
   }

    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mb-11">All The Orders </h1>
            <div className="lg:grid lg:grid-cols-2 gap-4">
                {
                     allOrders.map(allOrder=>{
                         return(
                            <div className="lg:flex mb-5 border-2 p-3 justify-center items-center" key={allOrder.orders?._id}>
                            <img className="lg:w-1/3" src={allOrder.orders?.image} alt="" />
                        <div>
                        <h1 className="text-3xl text-indigo-600 font-semibold ml-7">{allOrder.orders?.foodName}</h1>
                        <p className="text-3xl text-black font-semibold p-7"> $: {allOrder.orders.price}</p>
                        <button onClick={()=>handleDelete(allOrder._id)}  style={{transition:"all 0.3s ease-in"}} className="p-2 pl-4 pr-4 text-xl  border-1 ml-7 bg-indigo-600 hover:bg-indigo-200 hover:text-black font-semibold">Cancel</button>
                        </div>
                        </div>
                         )
                     })
                }
            </div>
        </div>
    );
};

export default AllOrders;