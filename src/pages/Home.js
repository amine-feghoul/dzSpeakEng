import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import Post from '../components/Post'
import PostCard from '../components/PostCard'
import './Home.css'
function Home() {
    return (
        <div className="home-container">

            <div className="home-main-wrapper">
                <Post/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>

        </div>
    )
}

export default Home
