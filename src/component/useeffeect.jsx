import { useEffect, useState } from "react";

const UseEffect = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    // base url
    const baseUrl = "https://jsonplaceholder.typicode.com/";

    useEffect(() => {
        fetch(`${baseUrl + resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))

        return () => {
            setItems([])
        }
    }, [resourceType])
    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>

            {items.map((item, index) => {
              return <pre key={index}>{JSON.stringify(item)}</pre> 
            })}
        </>
    )
}

export default UseEffect;