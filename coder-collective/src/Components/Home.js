import BlogCard from "./BlogCard";
import Search from "./Search";


const Home = ({users}) => {

return(
    <div>
        <Search/>
        {users.map(user=><BlogCard user={user}/>)}

    </div>
)
}
export default Home;