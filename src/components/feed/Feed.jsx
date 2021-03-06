import React from 'react'
import "./Feed.scss" 
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from "../../data/dummyData"

const Feed = () => {
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                { Posts.map((post) => {
                   return <Post post={post} key={post.id} /> 
                })}                
            </div>
        </div>
    )
}

export default Feed
