
import React, {useState, useEffect} from "react";
import './signIn.css';
import fire from '../../fire';
import Login from './Login';
/*function signIn() {
  return (
    <div className="App">
      
    </div>
  );
}*/
/*const logB = () => {
    console.log("Testing");
}*/

const SignIn = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    /*const ClearInputs = () =>{
        setEmail('');
        setPassword('');
    }*/

    /*const ClearError = () =>{
        setEmailError('');
        setPasswordError('');
    }*/

    const HandleLogin = () =>{
       // ClearError();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
              switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":    
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;        
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;   
              }  
         });
    };

    const HandleSignUp = () =>{
        //ClearError();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
              switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;   
              }  
            });
    };

    /*const HandleLogOut = () =>{
        fire.auth().signOut();
    };*/
    
    const AuthListener = () => {
        fire.auth().onAuthStateChanged((user) =>{
             if(user){
                 //ClearInputs();
                 setUser(user);
             } else{
                 setUser("");
             } 
        });
    };

    /*useEffect(() => {
      AuthListener();  
    }, []);*/

    return (
        <div className="SignIn">
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
        </div>
    );
};

export default SignIn;
