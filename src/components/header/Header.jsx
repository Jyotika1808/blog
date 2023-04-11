// import React from 'react'
import './header.css'
import image from './bj.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className="title">
        <span className="sm"></span>
        <span className="lg">Blogs</span>
      </div>
      <img className='himg' src={image} alt="" />
    </div>
  )
}
