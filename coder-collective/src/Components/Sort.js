import React from 'react'

 function Sort({handleSortClick}) {
    
    
    
    return (
        <div>
            <button type="checkbox" onClick={handleSortClick}>Sort by Name</button>
        </div>
    )
}

export default Sort;