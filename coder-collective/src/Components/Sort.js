import React from 'react'

 function Sort({handleOnClick}) {
    
    
    
    return (
        <div>
            <button type="checkbox" onClick={handleOnClick}>Sort by Name</button>
        </div>
    )
}

export default Sort;