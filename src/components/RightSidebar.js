import React from 'react'
import './RightSidebar.css'
import circle_user from '../circle-user.png'
export default function RightSidebar({ onWheel }) {
  return (
   
       <div className="sidebar right-sidebar" onWheel={onWheel}>

        <div className='page'>
          <p>comment</p>
          <p>property</p>
          <p>Expert</p>
          </div>
          <div className='Search-box'>
            <input type="search" placeholder='search' />
          </div>
          <div className='main'>
            <div className='logo'>
<img src={circle_user} alt="" />
<img src={circle_user} alt="" />
            </div>
            <div className='page'>
              <p>#17 page1</p>
            </div>
            <div className='comment'>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
       
        
          <div className='main'>
            <div className='logo'>
<img src={circle_user} alt="" />
<img src={circle_user} alt="" />
            </div>
            <div className='page'>
              <p>#17 page1</p>
            </div>
            <div className='comment'>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
         
          <div className='main'>
            <div className='logo'>
<img src={circle_user} alt="" />
<img src={circle_user} alt="" />
            </div>
            <div className='page'>
              <p>#17 page1</p>
            </div>
            <div className='comment'>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
         
          <div className='main'>
            <div className='logo'>
<img src={circle_user} alt="" />
<img src={circle_user} alt="" />
            </div>
            <div className='page'>
              <p>#17 page1</p>
            </div>
            <div className='comment'>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
       
       </div>
   
  )
}
