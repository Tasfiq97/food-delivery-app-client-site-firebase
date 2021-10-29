import React from 'react';

const OrderInfo = ({info}) => {
    const {name,description,price,image}=info ||{};
    console.log(info);
    return (
        <div className="lg:grid lg:grid-cols-2 p-14">
             <div>
             <h1 className="text-center text-3xl text-indigo-600 font-bold">{name}</h1>
             <p className="p-8 ">{description}</p>
             <h4 className="text-3xl ml-8">price: $: <span className="text-indigo-600 font-bold">{price}</span></h4>
             <button style={{transition:"all 0.3s ease-in"}} className="p-5 mt-5 ml-8 text-white border-1 bg-indigo-600 hover:bg-indigo-200 hover:text-black">place Order</button>
             </div>
             <div>
                 <img src={image} alt="" />
             </div>
        </div>
    );
};

export default OrderInfo;