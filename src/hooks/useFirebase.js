import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
 initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn=()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
         .finally(setLoading(false));
    }
    useEffect(()=>{
        setLoading(true)
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
         setLoading(false)
        })
    },[])
    const logOut=()=>{
        setLoading(true)
        signOut(auth).then(()=>{
            setUser({})
        })
        setLoading(false);
    }
   return{
       user,
       googleSignIn,
       logOut,
       loading
   }
}
export default useFirebase;