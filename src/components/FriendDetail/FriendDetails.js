import React from 'react'
import { useParams } from 'react-router'

const FriendDetails = () => {
    const {friendId} = useParams()
    return (
        <div>
            <h1>Friend Details {friendId}</h1>
        </div>
    )
}

export default FriendDetails
