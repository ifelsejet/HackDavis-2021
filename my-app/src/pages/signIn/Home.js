import React from 'react';

const Home = ({HandleLogOut}) =>{
    return(
        <section className = "home">
            <nav>
                <h2>Welcome</h2>
                <button onClick = {HandleLogOut}>Logout</button>
            </nav>
        </section>
    );
};

export default Home;