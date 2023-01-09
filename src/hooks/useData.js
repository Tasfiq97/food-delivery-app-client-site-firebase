import { useEffect, useState } from "react"


const useData=()=>{
   const [data,setData]=useState([]);

   useEffect(()=>{
       fetch("https://food-delivery-server-site-node-mongodb-h9s7.vercel.app/offers")
       .then(res=>res.json())
       .then(data=>setData(data));
   },[])
   return [data];
}
export default useData;