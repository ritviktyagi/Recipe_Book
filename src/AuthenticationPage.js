import React, { useState } from 'react'
import { database } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './App.css'

function AuthenticationPage() {
    const history = useNavigate();
    const [login, setLogin] = useState(false)

    const handleSubmit =(e, type)=> {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        if(type === "signup"){
            createUserWithEmailAndPassword(database, email, password).then(data=>{
                // console.log(data, "authdata")
                sessionStorage.setItem("id", email + password)
                localStorage.setItem("id", email + password)
                history('/home')
            }).catch(err => {
                alert(err.code)
                setLogin(true)
            })
        }
        else{
            signInWithEmailAndPassword(database, email, password).then(data=>{
                // console.log(data, "authdata")
                sessionStorage.setItem("id", email + password)
                localStorage.setItem("id", email + password)
                history('/home')
            }).catch(err => {
                alert(err.code)
            })
        }
    }

  return (
    <div className='App'>
        <div className='row'>
            <div className={!login ? "activeColor" : "pointer"} onClick={() => setLogin(false)}>SignUp</div>
            <div className={login ? "activeColor" : "pointer"} onClick={() => setLogin(true)}>SignIn</div>
        </div>
        <h1>{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
            <input name='email' placeholder="Email" className='input-fields' /><br/>
            <input type="password" name='password' placeholder="Password" className='input-fields' /><br/><br/>
            <button className='btn'>{login ? "SignIn" : "SignUp"}</button>
        </form>
    </div>
  )
}

export default AuthenticationPage