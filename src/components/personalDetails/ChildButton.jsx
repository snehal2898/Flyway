import { useState } from "react";
import ChildrenSection from "./data/children/ChildrenSection";

export default function ChildButton(){

  const [count,setCount] = useState(2)

  const [childs,setChilds]=useState([])

    const [isShown, setIsShown] = useState(false);
  
    const handleClick =(e)=>{
      setIsShown(true)
      setChilds([...childs,<ChildrenSection onClick={count}/>])
      setCount(count+1)
    }
  
    return (
      <div>
          <div>
            {isShown && 
            <div>
              {childs}
            </div>
            }
          </div>
        <button type="button" className="btn btn-primary m-2" onClick={handleClick}>+Add Child</button>
        </div>
    )
  
}