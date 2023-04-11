import React from 'react'
import pimg from './pos.jpg'
import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='pimg' src={pimg} alt="not" />

            <div className="pinfo">
                <div className="pcat">
                    <span className="postcat">Music</span>
                    <span className="postcat">Life</span>
                </div>

                <span className="ptitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="pdate">1 hour ago</span>
            </div>
            <p className="pdesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi sunt quibusdam cupiditate voluptates repudiandae iure vel numquam molestias ea?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi sunt quibusdam cupiditate voluptates repudiandae iure vel numquam molestias ea?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi sunt quibusdam cupiditate voluptates repudiandae iure vel numquam molestias ea?
            </p>
        </div>
    )
}
