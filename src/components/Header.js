
import React, { useState } from "react"
const Header = () => {

    const [counter, setCounter] = useState(0);
    const handleclick1= ()=>{
        setCounter(counter+1);
    }
    const handleclick2= ()=>{
        setCounter(counter-1);
    }
    return ( <div className="button">
        <button onClick={handleclick1}>Visited</button>
        <p>Visitors {counter}
    </p>
    <button onClick={handleclick2}>UnVisited</button></div>
    
  )
}

export default Header