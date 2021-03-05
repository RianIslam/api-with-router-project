import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const FriendDetails = () => {
    const {friendId} = useParams()
    const  [friend, setFriend] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h1>Friend Details {friendId}</h1>
            <h3>{friend.name}</h3>
        </div>
    )
}

export default FriendDetails
