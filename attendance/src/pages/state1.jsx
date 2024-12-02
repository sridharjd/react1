import { useState } from "react"

export const Counter1 = () => {
    
    const [count, setCount] = useState(0)

    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }

  return (

    <div className="Counter">
        <h2>Counter App_1 = {count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
} 
