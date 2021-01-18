
import React, {useState, useEffect} from "react";
import './signIn.css';
import fire from '../../fire';
import Login from './Login';
import Home from './Home';

/*function signIn() {
  return (
    <div className="App">
      
    </div>
  );
}*/
/*const logB = () => {
    console.log("Testing");
}*/
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const SignIn = () => {
    const [user, setUser] = useState('');
   //const [userLogin, setUserLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const ClearInputs = () =>{
        setEmail('');
        setPassword('');
    }

    const ClearError = () =>{
        setEmailError('');
        setPasswordError('');
    }

    const HandleLogin = () =>{//just looking for errors
       ClearError();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
              switch (error.code) {
                    case "auth/invalid-email":
                        setEmailError(error.message);
                        break;  
                    case "auth/user-disabled":
                        setEmailError(error.message);
                        break;      
                    case "auth/user-not-found":
                        setEmailError(error.message);
                        break;        
                    case "auth/wrong-password":
                        setPasswordError(error.message);
                        break;   
              }  
         });
    };

    const HandleSignUp = () =>{//just looking for errors
        ClearError();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
              switch (error.code) {
                    case "auth/email-already-in-use":
                        setEmailError(error.message);
                        break;
                    case "auth/invalid-email":
                        setEmailError(error.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(error.message);
                        break;   
              }  
            });
    };

    const HandleLogOut = () =>{//signs you out from home page
        fire.auth().signOut();
    };
    
    //https://firebase.google.com/docs/auth/web/manage-users
    const AuthListener = () => {
        fire.auth().onAuthStateChanged((user) =>{
             if(user){
                 ClearInputs();
                 setUser(user);
             } else{
                 setUser("");
             } 
        });
    };

    useEffect(() => {
      AuthListener();  
    });

    return (
        <div className="SignIn">
            {
                user ? (//if a user exists then we can attempt to login if it works then we go to home page
                    <Home HandleLogOut = {HandleLogOut}/>
                ):(
                    <Login 
                    email = {email}
                     setEmail = {setEmail}
                      password = {password}
                       setPassword = {setPassword}
                       HandleLogin = {HandleLogin}
                       HandleSignUp = {HandleSignUp}
                       hasAccount = {hasAccount}
                       setHasAccount = {setHasAccount}
                       emailError = {emailError}
                       passwordError = {passwordError}
                      
                    />
                )      
            }
        </div>
    );
};

export default SignIn;
