import React, {useState} from 'react'

function NewBlogger({addNewBlogger}) {
    
    const [formData, setFormData] = useState({
        username : "",
        pictureUrl: "",
        bio: "",
        quote: "",
        blog_link: "",
        likes: 0,    })
    

    function handleFormSubmit(e){
        e.preventDefault()
        addNewBlogger(formData)
    }
    
    function handleOnChange(e){
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    
    
    
    return (
        <div className="new-blogger-form">
            <h3>Add new blogger</h3>
            <form onSubmit={handleFormSubmit}>
                <input type= "text" value={formData.username} onChange={handleOnChange}  name="username" placeholder="Name"/>
                <input type= "text" value={formData.pictureUrl} onChange={handleOnChange} name="pictureUrl" placeholder="Image"/>
                <input type= "text" value={formData.bio} onChange={handleOnChange} name="bio"placeholder="Bio"/>
                 <input type= "text" value={formData.quote} onChange={handleOnChange} name="quote" placeholder="Quote"/>
                <input type= "text" value={formData.blog_link} onChange={handleOnChange} name="blog_link"placeholder="Blog Link"/>
               
                
                
                <button type="submit">Submit</button>    
               


            </form>
            
        </div>
    )
}


export default NewBlogger;