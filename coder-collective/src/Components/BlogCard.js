
import React from 'react'
import {useState, useEffect} from 'react'

function BlogCard({addLike,user,user:{blog_link,pictureUrl, username, id, likes}}) {
    // console.log(user)
const [likez, setLikes]=useState(likes)
const [updatedLike, setUpdatedLike] =useState(likes)

useEffect(()=>{
    setLikes(likes)
},[likes])

function handleLikeBtn(){
    // let id=user.id
   setLikes(likez+1)
   setUpdatedLike(updatedLike+1)


  

}

useEffect(()=>{
    let id=user.id
    fetch(`http://localhost:4000/coders/${id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes:likez})

    }).then(r=>r.json())
    .then(addLike())
},[updatedLike])


        
  



  




    return (
        <div className="card" style={{textAlign:'center'}} key={id}>
            
            <h2>{username}</h2>
            <img src={pictureUrl}/>
            <p>{blog_link}</p>
            <button onClick={handleLikeBtn}>Likes:{likez}</button>
            
        </div>
    )
}

export default  BlogCard;
