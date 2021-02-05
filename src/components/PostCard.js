import React from 'react'
import './PostCard.css'
function PostCard() {
    return (
        <div className="post-card-container">
            <div className="post-card-wrapper">
                <div className="post-card-info">
                    <div className="post-card-profile-pic">
                        <img src=" https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    </div>
                    <div className="post-card-profile-name-date">
                        <h2 > Amine Feghoul </h2>
                        <h4>Published: June,2 2018 19:PM </h4>
                    </div>
                </div>
                <div className="post-card-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="post-card-content">
                    <img src=" https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                </div>
             
                <div className="post-card-likes-comments">
                    <ul>
                        <li><i className="fas fa-eye"></i> <sup>50</sup></li>
                        <li><i className="far fa-heart"></i> <sup>50</sup></li>
                        <li><i className="far fa-comments"></i> <sup>50</sup></li>
                        <li><i className="fas fa-heart-broken"></i> <sup>50</sup></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostCard
