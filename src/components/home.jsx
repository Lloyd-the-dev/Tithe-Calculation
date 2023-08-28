import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className='container'>
            <h1 className='title'>Welcome to TithePay</h1>
            <p>“Every tithe of the land, whether of the seed of the land or of the fruit of the trees, is the LORD's; it is holy to the LORD”. <br />
            Leviticus 27:30</p>
            <Link to="/start"><button href="" className='btn'>Get Started</button></Link>
        </div>
    )
}

export default Home