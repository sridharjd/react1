import { useState } from "react"

export const Counter = () => {
    
    let [count, setCount] = useState(0)

    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }

  return (

    <div className="Counter">
        <h2>Counter App = {count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}
