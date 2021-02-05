import React from 'react'
import './YourPage.css'
function YourPage() {
    return (
        <div className="your-page-container">
            <div className="your-page-wrapper">
                
                    <h3 className="your-page-heading"> Your Page</h3>
                <div className="your-page-heading-underline" >
                </div>
                <div className="your-page-info">
                    <div className="your-page-info-pic">
                        <img src="https://images.unsplash.com/photo-1542260151-26fd0558f5f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </div>
                    <div className="your-page-info-name">
                        <h3> My Page</h3>
                        <a> <i className="far fa-comments"></i> messages</a>
                        <a><i className="far fa-bell"></i> Notifications</a>
                    </div>
                   
                </div>
                <ul className="your-page-btns">
                    <li> likes</li>
                    <li id="your-page-views-btn"> views</li>
                </ul>
                <h2 className="your-page-number-of-likes"> <i className ="far fa-heart"/> 500</h2>
                <h3 className="week-likes"> 35 likes this week </h3>

            </div>
        </div>
    )
}

export default YourPage
