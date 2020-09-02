import React, { useState, useEffect } from 'react'
import Start from 'Start'
import Cookies from 'js-cookie';
let Loginn;
let Logout;
const MAIN=()=>{

    const initialAuthData={flag:false}

    const [authData,setAuthData]= useState(initialAuthData)
        Logout = () => setAuthData(initialAuthData);
        
        Loginn = newAuthData => setAuthData(newAuthData);
      useEffect(() =>{
        const currentAuthData = {flag:Cookies.get('session')};
        if (currentAuthData) {
          setAuthData(currentAuthData);
        }
    },[])
    

    return(
        <Start Auth={authData}/>
    )
}
export  {Loginn,Logout}
export default MAIN;