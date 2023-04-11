import React from 'react'
import './login.css'
// import limg from './log.jpg'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className='login'>
            {/* <img className='img' src={limg} alt="" /> */}
            <span className="logtitle">Login</span>
            <form className="loginform">
                <label>Email</label>
                <input type="text" className='loginput' placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" className='loginput' placeholder='Enter your password...' />
                <button className="logb">Login</button>
            </form>
            <button className="reg">
                <Link className='link' to="/register">Register</Link> </button>
        </div>
    )
}
