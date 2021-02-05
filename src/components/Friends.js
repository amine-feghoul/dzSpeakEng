import React from 'react'
import FriendSidebarcard from './FriendSidebarcard'
import './Friends.css'
function Friends() {
    return (
        <div className="sidebar-friends-container">
            <div className="sidebar-friends-wrapper">
                <FriendSidebarcard/>
                <FriendSidebarcard/>
                <FriendSidebarcard/>
                <FriendSidebarcard/>
                <FriendSidebarcard/>
                <FriendSidebarcard/>
                <FriendSidebarcard/>

            </div>
        </div>
    )
}

export default Friends
