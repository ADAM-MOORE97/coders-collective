
import React from 'react'

function BlogCard({user,user:{blog_link,pictureUrl, username, id}}) {
    return (
        <div className="card" style={{textAlign:'center'}} key={id}>
            <span>
            <h2>{username}</h2>
            <img src={pictureUrl}/>
            <p>{blog_link}</p>
            </span>
        </div>
    )
}

export default  BlogCard;
