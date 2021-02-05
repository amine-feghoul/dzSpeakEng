import React from 'react'
import './FriendSidebarcard.css'
function FriendSidebarcard() {
    return (
        <div className="friend-sidebar-card-container">
            <div className="friend-sidebar-card-wrapper">
                <div className="friend-sidebar-card-pic">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                </div>
                <div className="friend-sidebar-card-name">
                    <h3> Amine Feghoul</h3>
                    <span>online</span>
                </div>
            </div>
        </div>
    )
}

export default FriendSidebarcard
