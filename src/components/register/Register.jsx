import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='register'>
            <span className="regtitle">Register</span>
            <form className="regiform">
                <label>Username</label>
                <input type="text" className='registerput' placeholder='Enter your Username...' />
                <label>Email</label>
                <input type="text" className='registerput' placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" className='registerput' placeholder='Enter your password...' />
                <button className="regb">Register</button>
            </form>
            <button className="log">
            <Link className='link' to="/login">Login</Link> 
            </button>
        </div>
    )
}