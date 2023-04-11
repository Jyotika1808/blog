import React from 'react'
import "./topbar.css"
import img from './imag.jpg'
import { Link } from 'react-router-dom'
export default function Topbar() {
    const user = false
    return (
        <div className='top'>
            <div className='topicon topleft'>
                <i className="topicon fa-brands fa-facebook"></i>
                <i className="topicon fa-brands fa-instagram"></i>
                <i className="topicon fa-brands fa-pinterest "></i>
                <i className="topicon fa-brands fa-twitter "></i>

            </div>
            <div className='topcenter'>
                <ul className='toplist'>
                    <li className='item'>
                        <Link className='link' to="/" > HOME</Link> </li>
                    <li className='item'>
                        <Link className='link' to="/" >   ABOUT </Link> </li>
                    <li className='item'>
                        <Link className='link' to="/" >CONTACT </Link> </li>
                    <li className='item'>
                        <Link className='link' to="/write" >WRITE </Link></li>
                    <li className='item'>
                        {user && "LOGOUT"} </li>
                </ul>
            </div>
            <div className='topright'>
                {
                    user ? (

                        <img src={img} alt="" className="img" />
                    ) : (
                        <ul className='toplist'>
                            <li className='item'>
                                <Link className='link' to="/login" style={{ color: 'black', fontWeight: '900' }}> LOGIN </Link>
                            </li>
                            <li className='item'>
                                <Link className='link' to="/register" style={{ color: 'red', fontWeight: '900' }} > REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="search fa-solid fa-magnifying-glass"></i>
            </div>

        </div>

    )
}
