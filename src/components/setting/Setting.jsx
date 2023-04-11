import React from 'react'
import "./setting.css"
import Sidebar from '../sidebar/Sidebar'
import simag from './pic.jpg'

export default function Setting() {
    return (
        <div className='setting'>
            <div className="settingwrap">
                <div className="settingtitle">
                    <span className="titleupdate">Update Your Account</span>
                    <span className="titledelete">Delete Account</span>
                </div>
                <form className="setform" style={{ display:'flex', flexDirection:'column'}}>
                    <label>Profile Picture</label>
                    <div className="pp">
                        <img src={simag} alt="no" />
                            
                        <label htmlFor="fileinput">
                        <i className="seticon far fa-user-circle"></i>
                       </label>
                        <input type="file" id='fileinput' style={{ display: "none" }} />
                        <label htmlFor="fileinput"></label>
                    </div>

                        <label>Username</label>
                        <input type="text" placeholder='xyz' />
                            
                        
                        <label>Email</label>
                        <input type="email" placeholder='xyz@gmail.com' />
                       
                        <label>Password</label>
                        <input type="Password" />
                        <button className="setsubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
