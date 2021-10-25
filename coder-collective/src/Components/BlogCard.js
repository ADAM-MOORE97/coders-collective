
import React from 'react'

function BlogCard({user,user:{blog_link,pictureUrl, username, id}}) {
    return (
        <div style={{textAlign:'center'}} key={id}>
            <h2>{username}</h2>
            <img src={pictureUrl}/>
            <p>{blog_link}</p>
        </div>
    )
}

export default  BlogCard;
