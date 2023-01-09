import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const AllOrders = () => {

    const [allOrders,setAllOrders]=useState([])
    const [update,setUpdate]=useState(null)
    useEffect(()=>{
    axios.get("https://food-delivery-server-site-node-mongodb.vercel.app/manageOrder")
    .then(result=>setAllOrders(result.data))
    },[update])


    const handleDelete=(id)=>{
      
        const proceed=window.confirm("are you sure uou want to cancel?");
        if(proceed){
           fetch(`https://food-delivery-server-site-node-mongodb.vercel.app/deleteOrder/${id}`,{
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

   const handleUpdate=(id)=>{

    fetch(`https://food-delivery-server-site-node-mongodb.vercel.app/update/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(allOrders)

    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.matchedCount>0){
            alert("you approved this order");
                setUpdate(true)
 
        }
        else{
              setUpdate(false)
        }
    });
   }

    return (
        <div>
            { allOrders.length===0 ? <h1 className="text-center text-4xl font-semibold mb-5 mt-12">please add food from offers </h1>
                :<>
                <h1 className="text-center text-4xl font-semibold mb-5 mt-12">All Users  Orders </h1>
            <p className="text-center text-3xl">You can cancel Order or can upgrade status from pending to approved</p>
                </>}
            <div className="lg:grid lg:grid-cols-2 gap-4 mt-16">
                {
                     allOrders.map(allOrder=>{
                         return(
                            <div className="lg:flex mb-5 border-2 p-3 justify-center items-center" key={allOrder.orders?._id}>
                            <img className="lg:w-1/3" src={allOrder.orders?.image} alt="" />
                        <div>
                        <h1 className="text-3xl text-indigo-600 font-semibold ml-7">{allOrder.orders?.foodName}</h1>
                        <p className="text-2xl text-black font-semibold ml-5 mt-2">status:  <span className="text-red-600 font-bold">{allOrder.status}</span></p>
                        <p className="text-3xl text-black font-semibold p-7"> $: {allOrder.orders.price}</p>
                        <button onClick={()=>handleDelete(allOrder._id)}  style={{transition:"all 0.3s ease-in"}} className="p-2 pl-4 pr-4 text-xl text-white  border-1 ml-7 bg-indigo-600 hover:bg-indigo-200 hover:text-black font-semibold">Cancel</button>
                        <button onClick={()=>{handleUpdate(allOrder._id)}}  style={{transition:"all 0.3s ease-in"}} className="p-2 pl-4 pr-4 text-xl text-white  border-1 ml-7 bg-indigo-600 hover:bg-indigo-200 hover:text-black font-semibold">Approve</button>
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