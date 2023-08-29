import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from './footer'
import './home.css'


function Home(){
   
    const[navbarOpen, setNavbarOpen] = useState(false)
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    
    return(
        <div>   
            <nav>
                <a href="/home" className="home">Tithe<span>Pay</span></a>
               
               {/* Mobile view */}
                <div className={`menu-hamburger `}>
                    <a href="#contact">Contact</a>
                </div> 

                
            </nav>
           
            
            <div className='container'>
                <h1 className='title'>Welcome to Tithe<span>Pay</span></h1>
                <p>We are a Christian based group who want to make the divine duty of Tithing much easier!</p>
                <div className="buttons">
                    <Link to="/start"><button className='btn'>Get Started</button></Link>
                    <a href="#about"><button className='btn'>More About Us</button></a>
                </div>
            </div>
            <div id="about" className="about">
                 <h3>Hello There</h3>
                 <h1>We Are TithePay</h1> <br />
                 <hr />
                 <p>The Bible tells us the importance of tithing in Leviticus 27:30(“Every tithe of the land, whether of the seed of the land or of the fruit of the trees, is the LORD's; it is holy to the LORD”).
                    It is very expedient in our walk with God that we are obedient to his instructions and set aside a tithe of any income we receive. Now at TithePay, we understand that some individuals find it 
                    difficult to pay tithes because they may not know how to calculate it and just end up ignoring it, NOT ANYMORE! With TithePay, you can easily calculate the equivalent tithe you are to pay on 
                    any amount of money.
                 </p>
            </div>
            <i class='bx bx-up-arrow' onClick={topFunction} id="myBtn"></i>
            <div id="contact">
                <Footer/>
            </div>
        </div>
        
    )
}

export default Home