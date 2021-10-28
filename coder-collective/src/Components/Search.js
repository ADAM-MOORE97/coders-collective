
import React from 'react'
import styled from 'styled-components';

function Search({handleSearch}) {
    
    
    return (
        <SearchStyle>
           <input placeholder="Search Blogger" type="text" id="searchBar" onChange={handleSearch}/>
        </SearchStyle>
    )
}

export default Search;

const SearchStyle = styled.div`
input{
    float: right;
    margin-top: 5px;
 }
`
