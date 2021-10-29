
import React from 'react'
import styled from 'styled-components';

function Search({handleSearch}) {
    
    
    return (
        <SearchStyle>
           <input placeholder="Search blogger..." type="text" id="searchBar" onChange={handleSearch}/>
        </SearchStyle>
    )
}

export default Search;

const SearchStyle = styled.div`
input{
    float: right;
    background-color: #83a4a4;
    color: black;
    width: 300px;
    
 }
`
