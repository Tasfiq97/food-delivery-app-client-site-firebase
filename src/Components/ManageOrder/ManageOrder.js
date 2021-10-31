import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';


const ManageOrder = () => {
    const [manageOrders,setManageOrders]=useState([]);
    const {user}=useAuth()

    useEffect(()=>{
        axios.get("https://grisly-moonlight-74244.herokuapp.com/manageOrder")
        .then(result=>{
            const data=result.data;
           const filterOrder=data.filter(dt=> dt.email===user.email)
                setManageOrders(filterOrder);
               
        });
    },[user])

const handleDelete=(id)=>{
      
     const proceed=window.confirm("are you sure you want to cancel?");
     if(proceed){
        fetch(`https://grisly-moonlight-74244.herokuapp.com/deleteOrder/${id}`,{
            method:"DELETE",
             headers:{"content-type":"application/json"},
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("Your Order Has Cancelled")
                const remainings=manageOrders.filter(order=>order._id!= id)
                setManageOrders(remainings);
            }
            
        })
     }
      

}



   
    return (
        <div>
            {manageOrders.length===0? <>  <h1 className="text-center text-4xl font-semibold mb-20 mt-16">Please order first</h1>
          <Link to="/home">
          <div className="text-center">
          <button style={{transition:"all 0.3s ease-in"}} className="p-3 pl-5 pr-5 text-xl  border-1 ml-7 bg-indigo-600 hover:bg-indigo-200 hover:text-black font-semibold text-center">Go back</button>
          </div>
          </Link>
            </>
               : <>
               <h1 className="text-center text-4xl font-semibold mt-16"> <span className="text-indigo-600 font-semibold">{user?.displayName}</span>, your {manageOrders.length} orders</h1>
               <p className="text-center text-3xl mt-4">you can cancel any orders from here</p>
               </>}

            <div className="lg:grid lg:grid-cols-2 mb-32 gap-4 mt-20 ">
            {
                manageOrders.map(items=>{
       
                    return(
                       

                            <div className="lg:flex mb-5 border-2 p-3 justify-center items-center" key={items.orders?._id}>
                                <img className="lg:w-1/3" src={items.orders?.image} alt="" />
                            <div>
                            <h1 className="text-3xl text-indigo-600 font-semibold ml-7">{items.orders?.foodName}</h1>
                            <p className="text-2xl text-black font-semibold ml-5 mt-2">status:  <span className="text-red-600 font-bold">{items.status}</span></p>
                            <p className="text-3xl text-black font-semibold p-7"> $: {items.orders.price}</p>
                            <button onClick={()=>handleDelete(items._id)}  style={{transition:"all 0.3s ease-in"}} className="p-2 pl-4 pr-4 text-xl text-white  border-1 ml-7 bg-indigo-600 hover:bg-indigo-200 hover:text-black font-semibold">Cancel</button>
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