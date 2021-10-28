import React from "react";
import styled from "styled-components";

function BlogCard({
  fetchPatch,
  user,
  user: { blog_link, pictureUrl, username, likes },
}) {
  function handleLikeBtn(user) {
    fetchPatch(user);
  }
  if (pictureUrl === "") {
    pictureUrl = defaultImage;
  }

  return (
    <CardContainer>
      <h2>{username}</h2>
      <img alt="No image found" src={pictureUrl} width="100px" height="120" />
      <p>{username}'s Blog:</p>
      <a href={blog_link} target="blank">
        Link🚀
      </a>
      <br />
      <button onClick={() => handleLikeBtn(user)}>Likes:{likes}</button>
    </CardContainer>
  );
}

export default BlogCard;

// Styled Components
const CardContainer = styled.div`
  transition: 0.3s;
  border-radius: 15px 15px 15px 15px;
  width: 400px;
  height: 425px;
  background-color: white;
  padding: 5px;
  margin: 20px;
  text-align: center;
  font-size: 1em;
  color: #a9cec2;
  background-color: #4a545c;
  &:hover {
    box-shadow: 4px 4px 16px 0px #a9cec2;
  }
  h2 {
    color: #83a4a4;
    font-size: 48px;
    font-style: bold;
  }
  p {
    font-size: 24px;
  }
  a {
    text-decoration: none;
    color: black;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 18px;
  }
  button {
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    background-color: #121212;
    letter-spacing: 5px;

    &:hover {
      box-shadow: 4px 4px 12px 0px #a9cec2;
    }
  }
`;

const defaultImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA4QEA4PEA0PDw8QEBANDhAQDw0OFhIWFxcRExMYHSkgGBolGxUXITEiJSkrLi4uFyszODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADoQAQACAQEEBQkGBgMBAAAAAAABAgMRBAUhMRJBUWFxBiIyUnKBkbHBEyNCYqHRM1OSorLhQ4LSFv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDPtePH6V6x3a8fghX35hjl0reFdPmC0FRG/sfqX/ALf3dsW+cFvxTX2qzH6gsR4x5a2jWtotHdOr2AAAAAAAAAAAAAAAAAAAAACLvDba4a9KeMzwrX1pB62va6Yq9K0+ERzt4Qz+2b3yZOFfMr2Vnzp8ZQ9oz2yWm1p1mfhEdkOQEyAAAD1iyWpOtbTWe2s6LnYN+cq5f64+sKQBt63iYiYmJieUxOsS9MruveM4Z0nWcU849XvhqKWiYiYnWJjWJjrgHoAAAAAAAAAAAAAAAAAHm9oiJmZ0iOMz2QyO37XOa826uVY7Krryh2jo44pHO86T7Mc/ozgAAAAAAAAC68n9t0n7K08J407p64Ur1jvNZi0c6zEx4wDbjls+WL0raOVoiXUAAAAAAAAAAAAAAACQZnygya5tOqtYj48VYmb3n7/L4x/jCGAAAAAAAAAADS+T2TXDp6tpj3c/qtFL5NT5uT2o+S6AAAAAAAAAAAAAAAABlN910z37+jP9sfsgrvykw8aX6p82fHnH1UgAAAAAAAAAAND5N08y89t/lC4Q91YOhhpE89OlPjM6pgAAAAAAAAAAAAAAAAI28Nm+1x2p1zxjutHJkLVmJmJjSYnSYnqluFHv3d+uuWke3Ef5AogAAAAAAAEzdey/a5IjTza6Wt4R1e9Fx0m0xWsa2mdIiGr3bsUYaac7TpNp7ZBMgAAAAAAAAAAAAAAAAAB8mH0BRbz3Pzvijvmn/n9lJMaTpMaTHOJ5w3CLtewY8vpV4+tHC0e8GQFxn3BePQvFo7LcJQr7szx/xW90xMfMEQSI2HL/ACr/ANLti3Rnt+Dox+a0fKAQXXZtnvkt0aRrP6R4z1LrZtwxHHJaZ/LXhHxW2HDWkdGtYrHZAIm7d21wxr6WSeduzuhPAAAAAAAAAAAAAAAAAAAAHy1oiJmZ0iOuQfXybac+Ed6m23fkRrGKOlPrT6Pu7VNtG1Xycb3me7lHwgGmzb0w155ImeyvnfJGvv7HHKt590QzgDQf/QU/l2+MOuPfmGefSr411j9GaAbHBtuO/o5KzPZrGvwSGGTdl3plx/i6VfVvx+E8wawQNh3pjy8PRv6tuvwnrTwAAAAAAAAAAAAAAAAAcdq2muKs2tyjq65nsgHzatqpir0rTpHVHXaeyIZnb94XzTx4U6qxy9/bLltu12y2m1uXVXqrDgAAAAAAAAAud2b4mNKZZ1ryi/XHtdvipgG4rOvLk+s3ufef2cxS8/dzymZ9Cf2aOJB9AAAAAAAAAAAAAB8tOkTM8o4spvTbZzX/ACV1isdvfPis/KDbOjEYonjaNbd1ez3s+AAAAAAAAAAAAAv9w7fr91efOiPMmeuOxQPWO81mLROkxOsT2SDbiPsO0xlx1vHXHGOy3XCQAAAAAAAAAAA85LxWJtPCIiZnwelV5Q5+jjisc7zp/wBY5/QFBtOecl7XnnafhHVDkAAAAAAAAAAAAAAALXyf2ro3mk+jfl3Wj92kYjHeazFo51mJjxhs9nyxetbRytESDoAAAAAAAAAAzG/s3SzTHVSIj385+jTSxm05Ole9vWtM+7UHIAAAAAAAAAAAAAAABpPJ7N0sXR9S0x7p4s2t/JvJpkvX1q6++J/2DRAAAAAAAAAA5bVbo0vPZS0/oxbX70nTDl9izIAAAAAAAAAAAAAAAAAJ25LaZ6d/Sj9P9IKTu2dM2L24BsAAAAAAAAAARN7fwMvsSyIAAAAAAAAAAAAAAAAAJG7/AOLi9uvzAGxAAAAAB//Z";
