import React from 'react'
import './sidebar.css'
import simg from './sbar.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sitem">
        <span className="stitle">ABOUT ME</span>
        <img src= {simg} alt="unable to load" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga perferendis commodi labore molestias possimus beatae odit earum consectetur est ut. Animi eum est a quod labore sequi ipsum, veniam placeat.
        </p>
      </div>
      <div className="sitem">
        <span className="stitle">CATEGORIES</span>
        <ul className="slist">
          <li className="slitem">Life</li>
          <li className="slitem">Music</li>
          <li className="slitem">Style</li>
          <li className="slitem">Sport</li>
          <li className="slitem">Tech</li>
          <li className="slitem">Cinema</li>
        </ul>
      </div>
      <div className="sitem">
        <span className="stitle">FOLLOW US</span>
        <div className="ssocial">
          <i className="sicon fa-brands fa-facebook"></i>
          <i className="sicon fa-brands fa-instagram"></i>
          <i className="sicon fa-brands fa-pinterest "></i>
          <i className="sicon fa-brands fa-twitter "></i>
        </div>
      </div>
    </div>

  )
}
