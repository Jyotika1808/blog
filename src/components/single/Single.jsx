import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './single.css'
import Singlepost from '../Singlepost/Singlepost'

export default function  Single() {
  return (
    <div className='single'>
    <Singlepost/>
    <Sidebar />
    </div>
  )
}
