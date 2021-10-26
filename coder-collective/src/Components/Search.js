
import React from 'react'

function Search({handleSearch}) {
    
    
    return (
        <div>
           <input type="text" id="searchBar" onChange={handleSearch}/>Search
        </div>
    )
}

export default Search;
