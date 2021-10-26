import BlogCard from "./BlogCard";
import Search from "./Search";
import { useState, useEffect } from "react";
import Sort from "./Sort";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchedData, setSearchedData] = useState(users);

  useEffect(() => {
    fetch(`http://localhost:4000/coders`)
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch(() => console.log("Run Server!"));
  }, []);

  function handleSearch(e) {
    const searchData = users.filter((user) => {
      return user.username.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchedData(searchData);
    console.log(searchData);
  }

  function handleOnClick(){
    const sortedUsers = users.slice().sort((a,b) => {
          if(a.username > b.username ) return 1
          if(a.username < b.username ) return -1
          else return 0
      })
      setSearchedData(sortedUsers)
}

  useEffect(() => {
    setSearchedData(users);
  }, [users]);

  return (
    <div>
      <Search handleSearch={handleSearch} users={users} />
      <Sort handleOnClick={handleOnClick}/>
      {searchedData.map((user) => (
        <BlogCard user={user} />
      ))}
    </div>
  );
};
export default Home;
