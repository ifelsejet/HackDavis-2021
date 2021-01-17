import React from 'react';
import './signIn.css';
import like from './sign_in.svg';


const Login = (props) =>{

    const {email, setEmail, password, setPassword, HandleLogin, HandleSignUp, hasAccount, setHasAccount, emailError, passwordError} = props;
    return(

        <section className = "login">
            <div className = "loginContainer">
            <h1>VFit LogIn</h1>
                <label>Email</label>
                <input 
                type ="text"
                 autofocus 
                 required
                 value = {email}
                 onChange = {(userEmail) => setEmail(userEmail.target.value)}
                 />
                 <p className = "errorMsg">{emailError}</p>
                 <label>Password </label>
                 <input 
                type ="text"
                 autofocus 
                 required
                 value = {password}
                 onChange = {(userPassword) => setPassword(userPassword.target.value)}
                 />
                 <p className = "errorMsg">{passwordError}</p>
                 <div className = "switchContainer">
                    {hasAccount ? ( //if account is already made
                        <>
                         <img src={like} id = "like" alt = 'like' />
                        <button onClick = {HandleLogin}>Sign in</button>
                        <p>Already have an account?<span onClick = {() => setHasAccount(!hasAccount)}> Sign up </span> </p>
                        </>
                        //p i just used to space the span to the right 
                        //switch buttons if you need to sign up or sign in
                    ) : (//if account isnt made then sign up
                        <>
                         <img src={like} id = "like" alt = 'like' />
                        <button onClick = {HandleSignUp}>Sign up</button>
                        <p>Don't have an account?<span onClick = {() => setHasAccount(!hasAccount)}> Sign in </span></p>
                        </>
                    )} 
                </div>
            </div>
        </section>
    );
};

export default Login;