
import React, { useState } from "react"
const Header = () => {

    const [counter, setCounter] = useState(0);
    const handleclick= ()=>{
        setCounter(counter+1);
    }
    return ( <div className="button"><p>Visitors {counter}</p><button onClick={handleclick}>Visited</button></div>
  )
}

export default Header