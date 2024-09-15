import { useState } from "react"

const UseState = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => count >= 0 ? setCount((prevCount) => prevCount + 1) : ''}>+</button>
            <span>{ count }</span>
            <button onClick={() => count > 0 ? setCount((prevCount) => prevCount - 1) : ''}>-</button>
        </>
    )
}

export default UseState;