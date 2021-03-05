import React from 'react'

const Friend = (props) => {
    
    const {name,email} = props.friend

    return (
        <div>
            <h2>Name:{name}</h2>
            <p>email:{email}</p>
        </div>
    )
}

export default Friend
