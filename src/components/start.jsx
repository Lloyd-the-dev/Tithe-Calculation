import React from 'react'
import { useState } from 'react'
import './start.css'
function Start(){
    const[amount, setAmount] = useState(0)
    let tithe = amount * 0.1
    
    return(
        <div className='start-container'>
            <h1 className='hover-underline-animation'>Let's begin your Tithing Journey</h1>
            <div className='input-section'>
                <h3>How much is your Current Income?</h3>
                <input type="text" className='tithe-input' onChange={
                    (event) =>{
                        setAmount(event.target.value)
                    }
                }/>
            </div>
            <h3 className='tithe'>Your Tithe is {tithe}</h3>
 
        </div>
    )
}

export default Start