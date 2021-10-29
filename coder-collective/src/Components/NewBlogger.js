import React, { useState } from "react";
import styled from "styled-components";

function NewBlogger({ addNewBlogger }) {
  const [formData, setFormData] = useState({
    username: "",
    pictureUrl: "",
    bio: "",
    quote: "",
    blog_link: "",
    likes: 0,
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    addNewBlogger(formData);
  }

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div style={{justifyContent:"center", textAlign:"center"}}>
      <FormStyle onSubmit={handleFormSubmit}>
        <h3>Add new blogger</h3>
        <input
          type="text"
          value={formData.username}
          onChange={handleOnChange}
          name="username"
          placeholder="Name"
        />
        <input
          type="text"
          value={formData.pictureUrl}
          onChange={handleOnChange}
          name="pictureUrl"
          placeholder="Image"
        />
        <input
          type="text"
          value={formData.bio}
          onChange={handleOnChange}
          name="bio"
          placeholder="Bio"
        />
        <input
          type="text"
          value={formData.quote}
          onChange={handleOnChange}
          name="quote"
          placeholder="Quote"
        />
        <input
          type="text"
          value={formData.blog_link}
          onChange={handleOnChange}
          name="blog_link"
          placeholder="Blog Link"
        />

        <button type="submit">Submit</button>
      </FormStyle>
    </div>
  );
}

export default NewBlogger;

const FormStyle = styled.form`
/* justify-content: center */
  h3 {
    color: #83a4a4;
    text-align: center;
    font-size: 48px;
  };
  input {
    background-color:#83a4a4;
    display: block;
  }
`
