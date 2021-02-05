import React from 'react'
import FollowingProfile from './FollowingProfile'
import './LeftSideBar.css'
function LeftSideBar() {
    return (
        <div className="left-sidebar-container">
           <div className="shortcuts">
           
           <h1> Shortcuts</h1>
           <div className="heading-div">
           </div>
           <ul>
               <li> <i className="fas fa-newspaper"></i> News feed</li>
               
               <li><i className="far fa-copy"></i> My pages</li>
               <li> <i className="fas fa-users"></i>Friends</li>
               <li> <i className="fas fa-image"></i>images</li>
               <li> <i className="fas fa-video"></i>videos</li>
               <li> <i className="far fa-comments"></i>Messages</li>
               <li><i className="far fa-bell"></i> Notifications</li>
           </ul>
           </div>
           
           <div className="whos-following">
               
               <h1> Who's following</h1>
               <div className="heading-div">
               </div>
                <FollowingProfile/>
                <FollowingProfile/>
                <FollowingProfile/>
                <FollowingProfile/>
           </div>
         
        </div>
    )
}

export default LeftSideBar
