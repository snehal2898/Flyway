import { useState } from "react";
import InfantSection from "./data/infant/InfantSection";

export default function InfantButton(){

  const [count,setCount] = useState(2)

  const [infants,setInfants]=useState([])

  const [isShown, setIsShown] = useState(false);
  
    const handleClick =(e)=>{
      setIsShown(true)
      setCount(count+1)
      setInfants([...infants,<InfantSection onClick={count}/>])
    }
  
    return (
      <div>
          <div>
            {isShown && 
            <div>
              {infants}
            </div>
            }
          </div>
        <button type="button" className="btn btn-primary m-2" onClick={handleClick}>+Add Infant</button>
        </div>
    )
  
}