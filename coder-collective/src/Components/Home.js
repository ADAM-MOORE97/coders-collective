import BlogCard from "./BlogCard";
import Search from "./Search";
import { useState, useEffect } from 'react'


const Home = () => {

    const [users, setUsers] = useState([]);
    const [searchedData, setSearchedData] = useState(users);

    useEffect(() => {
        fetch(`http://localhost:4000/coders`)
            .then((r) => r.json())
            .then((data) => setUsers(data))
            .catch(err => console.log('Run Server!'));
    }, []);

    function handleSearch(e) {
        const searchData = users.filter(user => {
            return user.username.toLowerCase().includes(
                e.target.value.toLowerCase())
        })
        setSearchedData(searchData)
        console.log(searchData)
    }

    useEffect(() => {
        setSearchedData(users)
    }, [users])







    return (
        <div>
            <Search handleSearch={handleSearch} users={users} />
            {searchedData.map(user => <BlogCard user={user} />)}

        </div>
    )
}
export default Home;