import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderInfo from '../OrderInfo/OrderInfo';

const OrderDetails = () => {
    const {orderId}=useParams();
const [orders,setOrders]=useState([])
const selectedOrder=[];
useEffect(()=>{
   fetch("/fakedata.json")
   .then(res=>res.json())
   .then(data=>setOrders(data))
   
    
},[])


const filteredOrder=orders.find(order=>order.key==orderId)
   selectedOrder.push(filteredOrder);
    return (
        <div>
            <h1 className="text-4xl text-center font-extrabold mt-14 mb-20">Order Details</h1>
            {
                selectedOrder.map(info=><OrderInfo
                 key={info?.key}
                info={info}
                ></OrderInfo>)
            }
          
        </div>
        
);
    }

export default OrderDetails;