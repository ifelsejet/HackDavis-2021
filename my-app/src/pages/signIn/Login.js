import React from 'react';


const Login = (props) =>{

    const {email, setEmail, password, setPassword, HandleLogin, HandleSignUp, hasAccount, setHasAccount, emailError, passwordError} = props;
    
    return(
       
        <section className = "login">
            <div className = "loginContainer">
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
                        <button onClick = {HandleLogin}>Sign in</button>
                        <p><span onClick = {() => setHasAccount(!hasAccount)}> Sign up </span> </p>
                        </>
                        //switch buttons if you need to sign up or sign in
                    ) : (//if account isnt made then sign up
                        <>
                        <button onClick = {HandleSignUp}>Sign up</button>
                        <p><span onClick = {() => setHasAccount(!hasAccount)}> Sign in </span></p>
                        </>
                    )} 
                </div>
            </div>
        </section>
    );
};

export default Login;