import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactStyle>
      <h4>Contact Us</h4>
      <div>
        <h6>Adam Moore</h6>
        <p>Email: adammooredev1@gmail.com</p>
        <p>Cell: 228-234-8061</p>
        <h6>Rohail Rafique</h6>
        <p>Email: rohailrafique@gmail.com</p>
        <p>Cell: 647-979-2372</p>
      </div>
      <p>Copyright: Flatiron School Project</p>
    </ContactStyle>
  );
}

export default Contact;

const ContactStyle = styled.div`
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  line-height: 0px;
  div {
    border-top: 1rem solid #4a545c;
    border-bottom: 1rem solid #4a545c;
    color: #a9cec2;
    font-size: 32px;
  }
  h4 {
    color: #83a4a4;
    font-size: 52px;
    font-style: bold;
  }
  p {
    
    color: #a9cec2;
    font-size: 32px;
  }
  h6 {
    /* border-top: 1rem solid #4a545c; */
    color: #83a4a4;
    font-size: 42px;
    word-spacing: 10px;
    padding-top: 0px;
    text-decoration: underline;
  }
`;
