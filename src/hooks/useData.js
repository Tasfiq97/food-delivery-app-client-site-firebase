import { useEffect, useState } from "react"


const useData=()=>{
   const [data,setData]=useState([]);

   useEffect(()=>{
       fetch("https://grisly-moonlight-74244.herokuapp.com/offers")
       .then(res=>res.json())
       .then(data=>setData(data));
   },[])
   return [data];
}
export default useData;