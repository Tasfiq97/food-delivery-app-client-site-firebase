import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddOffers = () => {
    const { register, handleSubmit,reset } = useForm();
    const history=useHistory()
 const onSubmit=data=>{
     axios.post ("https://food-delivery-server-site-node-mongodb-h9s7.vercel.app/offers",data)
     .then(result=>{
         if(result.data.insertedId){
             alert("your food is added to our offers")
             reset()
             history.push("/home")

         }
     });
 };
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-16">Please Fill the details of your offers</h1>
            <div className="flex justify-center items-center mt-8">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input  className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="key" {...register("key")} required />
      <input  className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder=" restaurant name" {...register("name" )} required />
      <input  className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="foodname" {...register("foodName" )} required />
      <textarea  className="bg-gray-200 p-5 w-max text-2xl mt-5" placeholder="decription" {...register("description" )} required />
      <input  className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="open" {...register("open" )} required />
      <input className="bg-gray-200 p-3 w-max text-2xl mt-5" type="text" placeholder="time as 9.00am-12.00pm" {...register("time" )} required />
      <input className="bg-gray-200 p-3 w-max text-2xl mt-5" placeholder="price" type="number" {...register("price" )} required/>
      <input className="bg-gray-200 p-3 w-max text-2xl mt-5" type="text" placeholder="image url" {...register("image" )} required />
      <input style={{transition:"all 0.3s ease-in"}} className="p-4 pl-8 pr-8 text-2xl mt-5 border-1 bg-indigo-600 text-white cursor-pointer hover:bg-indigo-200 hover:text-black" type="submit" />
    </form>
    </div>
        </div>
    );
};

export default AddOffers;