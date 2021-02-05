import React from 'react'
import YourPage from './YourPage'
import './RightSideBar.css'
import Friends from './Friends'

function RightSideBar() {
    return (
        <div className="left-sidebar-container">
            <div className="right-sidebar-wrapper">
                <YourPage/>
                <Friends/>
            </div>
        </div>
    )
}

export default RightSideBar
