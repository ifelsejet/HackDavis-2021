import React from 'react';


const Login = (props) =>{

    const {email, setEmail, password, setPassword, HandleLogin, HandleSignUp, hasAccount, setHasAccount, emailError, passwordError} = props;
    
    return(
       
        <section className = "login">
            <div className = "loginContainer">
                <label>Username</label>
                <input 
                type ="text"
                 autofocus 
                 required
                 value = {email}
                 onChange = {(e) => setEmail(e.target.value)}
                 />
                 <p className = "errorMsg">{emailError}</p>
                 <label>Password</label>
            </div>
        </section>
    );
};

export default Login;