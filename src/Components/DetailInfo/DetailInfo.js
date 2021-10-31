
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';


const DetailInfo = () => {
    const {id}=useParams()
    const [orderData,setOrderData]=useState({});
 useEffect(()=>{
    axios.get(`http://localhost:5000/offers/${id}`)
    .then(result=>setOrderData(result.data));
 },[orderData])
    const { register, handleSubmit,reset } = useForm();
    const {user}=useAuth()
    const history=useHistory();
  const onSubmit = data => {
     data.orders=orderData;
     data.status="pending";
      console.log(data);
    axios.post("http://localhost:5000/orderInfo",data)
    .then(result=>{
      if(result.data.insertedId){
        alert("your order is done");
        reset();
    history.push("/manageOrder")
      }
    });
  };
    return (
        <div>
            <div className=" p-8 lg:ml-48">
            <h1 className="text-3xl ">You have Ordered : <span className="text-indigo-600 font-extrabold">{orderData.foodName}</span></h1>
          <div className="text-center mt-6">

          <img className="lg:w-2/6" src={orderData.image} alt="" />
          </div>
            <h4 className="text-4xl mt-8">price is : $ <span className="text-indigo-600 font-extrabold">{orderData.price}</span> </h4>
            </div>
            <h1 className="text-4xl text-center">Please Give us details </h1>
<div className="flex justify-center items-center mt-8">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user?.displayName} className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="name" {...register("name")} />
      <input defaultValue={user?.email} className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="email" {...register("email" )} required />
      <input className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="your address" {...register("address" )} required />
      <input className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="phone" type="number" {...register("number" )} required/>
      <input style={{transition:"all 0.3s ease-in"}} className="p-4 pl-8 pr-8 text-2xl mt-5 border-1 bg-indigo-600 cursor-pointer hover:bg-indigo-200 hover:text-black" type="submit" />
    </form>
    </div>
        </div>
    );
};

export default DetailInfo;