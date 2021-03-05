import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const FriendDetails = () => {
    const {friendId} = useParams()
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`

        fetch(url)
        .then(res => res.json())
        .then(data =>)
    },[])
    return (
        <div>
            <h1>Friend Details {friendId}</h1>
        </div>
    )
}

export default FriendDetails
