import React from 'react'
import './Navbar.css'
import angle_down from '../angle-down.png'
import circle_user from '../circle-user.png'
import comment_dot from '../comment-dots.png'
import hand_paper from '../hand-paper.png'
import play_icon from '../play.png'
import location_icon from '../location-arrow.png'



export default function Navbar({ onWheel }) {
  return (
   
      <div className="navbar" onWheel={onWheel}>
<div className="logo">

<img src={location_icon} alt="" />
<img src={hand_paper} alt="" />
<img src={comment_dot} alt="" />
</div>
<div className="name">
<p>Basic responsive task <img src={angle_down} alt="" /></p>

</div>
<div className="userlogo">
<img src={circle_user} alt="" />
<img src={circle_user} alt="" />
<img src={circle_user} alt="" />
<button className='button'>share</button>
<img src={play_icon} alt="" /><img src={angle_down} alt="" />

</div>
      </div>
    
  )
}
