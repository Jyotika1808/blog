import React from 'react'
import './write.css'
import wimag from "./wr.jpg";

export default function Write() {
  return (
    <div className='write'>
      <img className='wimg' src={wimag} alt="no" />
      <form className='writeform' action="">
        <div className="wgroup">

          <label htmlFor="fileinput">
            <i className="wicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id='fileinput' style={{ display: "none" }} />
          <input type="text" placeholder='Title' className='winput' autoFocus={true} />
        </div>
        <div className="fgrp">
          <textarea className='winputwtext' placeholder='Tell Your story...' type="text"></textarea>
        </div>
        <button className="submit">Publish</button>
      </form>
    </div>
  )
}
