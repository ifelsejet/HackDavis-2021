import React from 'react';
import './signIn.css';

const Home = ({HandleLogOut}) =>{
    return(
        <section className = "home">
            <nav>
                <h2>Welcome To vFit</h2>
                <button onClick = {HandleLogOut}>Logout</button>
            </nav>
        </section>
    );
};

export default Home;