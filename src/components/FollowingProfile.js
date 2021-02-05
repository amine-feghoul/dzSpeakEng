import React from 'react'
import './FollowingProfile.css'
function FollowingProfile() {
    return (
        <div className="following-profile-container">
            <div className="follwing-profile-wrapper">
               <div className="following-profile-pic" >
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
               </div>
               <div  className="following-profile-name">
                   <h2> Amine</h2>
                   <a href="/"> add friend</a>
               </div>
            </div>
        </div>
    )
}

export default FollowingProfile 