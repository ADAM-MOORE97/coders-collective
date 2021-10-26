import BlogCard from "./BlogCard";
import Search from "./Search";


const Home = ({users, handleSearch}) => {

    

return(
    <div>
        <Search handleSearch={handleSearch} users={users}/>
        {users.map(user=><BlogCard user={user}/>)}

    </div>
)
}
export default Home;