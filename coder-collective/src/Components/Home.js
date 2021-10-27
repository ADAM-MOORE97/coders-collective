import BlogCard from "./BlogCard";
import Search from "./Search";
import { useState, useEffect } from "react";
import Sort from "./Sort";
import NewBlogger from "./NewBlogger"
const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchedData, setSearchedData] = useState(users);
  const [like, setLike] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/coders`)
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch(() => console.log("Run Server!"));
  }, [like]);

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

  function handleSearch(e) {
    const searchData = users.filter((user) => {
      return user.username.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchedData(searchData);
    console.log(searchData);
  }

  function handleSortClick() {
    const sortedUsers = users.slice().sort((a, b) => {
      if (a.username > b.username) return 1;
      if (a.username < b.username) return -1;
      else return 0;
    });
    setSearchedData(sortedUsers);
  }

  function addNewBlogger(formData){
      fetch("http://localhost:4000/coders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify(formData)
        
      })
      .then(setLike(like => !like))

  }

  useEffect(() => {
    setSearchedData(users);
  }, [users]);

  return (
    <div>
      <Search handleSearch={handleSearch} users={users} />
      <Sort handleSortClick={handleSortClick} />
      <NewBlogger addNewBlogger={addNewBlogger}/>
      {searchedData.map((user) => (
        <BlogCard fetchPatch={fetchPatch} key={user.id + 2} user={user} />
      ))}
    </div>
  );
};
export default Home;
