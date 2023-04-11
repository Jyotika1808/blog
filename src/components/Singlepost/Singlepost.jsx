import React from 'react'
import './singlepost.css'
import singleimg from './post.jpg'

export default function Singlepost() {
  return (
    <div className='singlepost' >
        <div className="singlepostwrap">
         <img src={singleimg} alt="" className="singlepostimg" />
              <h1 className="singtitle">
             Lorem ipsum dolor sit amet.
                  <div className="sedit">
                      <i className="spicon fa-regular fa-pen-to-square"></i>
                      <i className="spicon fa-solid fa-trash"></i>
       </div>
       
              </h1>
              <div className="spinfo">
                  <span className='spauthor'>Author:<b>Safak</b></span>
                  <span className='spdate'>1 hour ago</span>
              </div>
              <p className='spdesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim recusandae at a laudantium consectetur iure tenetur! Praesentium, officia ad.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim recusandae at a laudantium consectetur iure tenetur! Praesentium, officia ad.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim recusandae at a laudantium consectetur iure tenetur! Praesentium, officia ad.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim recusandae at a laudantium consectetur iure tenetur! Praesentium, officia ad.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim recusandae at a laudantium consectetur iure tenetur! Praesentium, officia ad.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim recusandae at a laudantium consectetur iure tenetur! Praesentium, officia ad.
              </p>
          </div>
    </div>
  )
}
