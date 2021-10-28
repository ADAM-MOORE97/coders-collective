import React from 'react'
import styled from 'styled-components';

 function Sort({handleSortClick}) {
    
    
    
    return (
        <SortStyle>
            <button type="checkbox" onClick={handleSortClick}>Sort by Name</button>
        </SortStyle>
    )
}

export default Sort;

const SortStyle = styled.div`
margin-top: 5px;
button{
   background-color: #83a4a4;
   width: 200px;
   
};
`