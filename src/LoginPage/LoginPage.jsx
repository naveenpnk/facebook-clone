import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login'>
        <div className="login-page">
            <div className="facebook">
                <div className="title">facebook</div>
                <div className="subtitle">
                    Facebook helps you connect and share <br></br> 
                    with the people in your life.
                </div>
            </div>
            <div className="login-container">
                <div className="login-details">
                    <input type="email" placeholder='Email address or phone number'/>
                    <input type="password" placeholder='Password'/>
                    <Link to="/home" className='link'>
                        <button className='btn'>Login</button>
                    </Link>
                    <a href="forgot">Forgotten password?</a>
                    <button className='create-btn'>Create New Account</button>
                </div>
                <div className="create-page">
                    <a href="page">Create a Page</a> for a celebrity, brand or business.
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage