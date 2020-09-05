import React, { Component,useEffect,useState } from 'react'
import Cookies from 'js-cookie';
import {useHistory} from "react-router-dom"
import UserBio from "./UserBio"
import {Logout} from '../../MAIN'

function Profile() {
    let history = useHistory();

    const session = Cookies.get("session")
    const useremail = Cookies.get("useremail")
    console.log(session)
    console.log(useremail)

    const [authenticated,changeAuth]= useState(false)
    // const [data,setData] = useState({})
    // setData(useremail)
    useEffect(() =>{
        if(typeof session === "string"){
            changeAuth(true)
        }
        else{
            changeAuth(false)
            history.push("/login")
        }
        getdata()
    },[])

    function logout(){
        Cookies.remove("session")
        history.push("/login")
        Logout();
        // const headers = {
        //     'Access-Control-Allow-Origin':'*',
        //     'Content-Type':'application/json',
        // }
          fetch('https://api.aidatabases.in/profile', {
            method: 'POST',
            body: JSON.stringify({sesid:session})
            // headers: headers,
            // credentials: "include"
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
    }


    function getdata() {
        // const user = {
        //   session_id: session
        // }

        // const headers = {
        //     'Access-Control-Allow-Origin':'*',
        //     'Content-Type':'application/json',
        // }
          fetch('https://api.aidatabases.in/profile', {
            method: 'POST',
            body: JSON.stringify({sesid:session})
            // headers: headers,
            // credentials: "include"
          })
          .then(res=>res.json())
          .then(res => {
              console.log("profile",res)
                // let d =res.data
              // props.history.push('/')
              
              //let auth = JSON.parse(res)
              // console.log(res)
              if(res.session === "expired"){
                changeAuth(false)
                window.alert("session exipred !pls login")
                history.push("/login")
              }
              else if(res["session"] === "active"){
                  //changeAuth()
                //   Cookies.set('session', res[])
                // if(session === res["session-id"]){

                //     let temp = {
                //         "email":res["user-email"]
                //     }
                //     setData(temp)
                //     console.log("temp",temp)
                // }else{
                // changeAuth(false)
                // }
                
              changeAuth(true)
              }


          })
          .catch(err => {
            console.log('error:-' + err)
          })
    
      }

    if(!authenticated){
        return (<><h2>Session expired!pls login before u accesss</h2><br /><a href="login">login</a></>)
    }


    return (
      <div style={{marginTop:"300px"}}>
          <h1> WELCOME Mr. {useremail} </h1>

          <br /><br />
          <UserBio /><br /><br />
          <button onClick={logout}>Logout</button>
          
      </div>
  )
}


export default Profile;
