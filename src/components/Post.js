import React from 'react'
import './Post.css'
function Post() {
    return (
        <div className="post-container">
            <div className="add-post-profile-pic">
             <img  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="profile-pic" />
            </div>
            <div className=" post-wrapper ">
               
                <textarea id="post-text"placeholder="write somthing ...."/>
                <ul className="post-icons"> 
                    <li> <i className="fas fa-video"></i></li>
                    <li><i className="fas fa-music"></i></li>
                    <li><i className="fas fa-camera"></i></li>
                    <li id="post-btn" ><a  href=""> post</a></li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Post
