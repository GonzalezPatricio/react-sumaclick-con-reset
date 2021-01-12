import React, {useState} from "react";
import "./style.css";

export default function App() {
const [click, setClick] = useState (0)

let fecha = new Date() .toLocaleDateString()
let hora = new Date() .toLocaleTimeString()

const handleClick = () =>{
  setClick(click +1)
},

const resetClick = () => {
  setClick(0)
}


return (
  <div>
      <h1> Desafio del Click</h1>
      <button onClick={handleClick} > Click</button>
      <p>Cantidad de Click's:</p>
      <p className ='contClick' >{click} </p>
      <p> A esta hora se hizo el ultimo <b>Click:</b></p>
      <p className = 'mostfecha'>{fecha + "  " + hora} </p>
      {
              click > 0 && 
          <>
            <button onClick={resetClick}>RESET</button>
          </>
      }
  </div>
 

      
);
}