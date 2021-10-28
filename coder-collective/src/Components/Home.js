import BlogCard from "./BlogCard";
import Search from "./Search";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Sort from "./Sort";
import NewBlogger from "./NewBlogger"
const Home = () => {
// All States that affect rendered data & server requests
    const [users, setUsers] = useState([]);
    const [searchedData, setSearchedData] = useState(users);
    const [like, setLike] = useState(false);

// GET
    useEffect(() => {
      fetch(`http://localhost:4000/coders`)
        .then((r) => r.json())
        .then((data) => setUsers(data))
        .catch(() => console.log("Run Server!"));
    }, [like]);

// Patch
    function fetchPatch(user) {
      let userid = user.id;
      let numLikes = user.likes;
      fetch(`http://localhost:4000/coders/${userid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: numLikes + 1 }),
      }).then(setLike((like) => !like));
    }

// Post
    function addNewBlogger(formData) {
      fetch("http://localhost:4000/coders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)

      })
        .then(setLike(like => !like))
    }

// Search By Name
    function handleSearch(e) {
      const searchData = users.filter((user) => {
        return user.username.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setSearchedData(searchData);
    }

// Set passed down Data to users after initial GET request
    useEffect(() => {
      setSearchedData(users);
    }, [users]);

// Sort By Name Alphabetically
    function handleSortClick() {
      const sortedUsers = users.slice().sort((a, b) => {
        if (a.username > b.username) return 1;
        if (a.username < b.username) return -1;
        else return 0;
      });
      setSearchedData(sortedUsers);
    }

// All Child Components of HOME.js
    return (
      <div>
        <Search handleSearch={handleSearch} users={users} />
        <Sort handleSortClick={handleSortClick} />
       <HomeCards>
        {searchedData.map((user) => (
          <BlogCard fetchPatch={fetchPatch} key={user.id + 2} user={user} />
        ))}
        </HomeCards>
         <NewBlogger addNewBlogger={addNewBlogger} />
      </div>
    );
  };
  export default Home;
  
  const HomeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: 50px;
  margin-right: 50px;
  padding: 100px;
`

