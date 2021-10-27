import React from 'react'
import styled from 'styled-components';


function BlogCard({ fetchPatch, user, user: { blog_link, pictureUrl, username, id, likes } }) {




    function handleLikeBtn(user) {
        fetchPatch(user);
    }


    return (
        <CardContainer>
            <h2>{username}</h2>
            <img src={pictureUrl} />
            <p>{username}'s Blog:</p>
            <a href={blog_link} target='blank'>{blog_link}</a>
            <br />
            <button onClick={() => handleLikeBtn(user)}>Likes:{likes}</button>
        </CardContainer>
    )
}

export default BlogCard;


const CardContainer = styled.div`
transition: 0.3s;
border-radius: 15px 15px 15px 5px;
width: 400px;
height: 425px;
background-color: white;
:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
