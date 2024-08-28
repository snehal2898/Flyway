import { createContext, useState } from "react";
import AdultSection from "./data/adult/AdultSection";
import TravellerDetails from "./TravellerDetails";


export default function Button(){


  const [count,setCount] = useState(2);

  const [adults,setAdults]=useState([])

  const [isShown, setIsShown] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  const handleClick =()=>{
    setIsShown(true)
    setAdults([...adults,<AdultSection onClick={count}/>])
    setCount(count+1)
  }

  return (
    <>
    
    <div>
      {isShown &&
    <form onSubmit={handleSubmit}> 
        <div>
          <div>
            {adults} 
          </div>
        </div>
      </form>}  
      <button type="button" className="btn btn-primary m-2" onClick={handleClick}>+Add Adult</button>
      
    </div>

    </>
  )
           
}