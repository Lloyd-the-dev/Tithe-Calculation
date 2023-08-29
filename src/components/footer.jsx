import React from 'react'
function Footer(){
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <h2>Tithe<span>Pay</span></h2>
                    <p>We Hope with the help of this app, you will become a faithful tither and all the blessings God has planned your way will meet you well.</p>
                </div>
                <div className='footer-right'>
                    <h2>Get Notified</h2>
                    <p>If you will like to get notified about any update we may have or any product we release, kindly enter yor email address below.</p>
                    <div className='subscribe-section'>
                        <input type="text" placeholder='Email Address'/>
                        <button>Subscriber</button>
                    </div>
                </div>
            </div>
            <p className='copyright'>&copy;Copyright TithePay 2023</p>
        </div>
    )
}
export default Footer