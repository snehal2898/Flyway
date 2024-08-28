import { useState } from "react";


const AdultSection = (props)=>{

    

    const [adultProfile,setadultProfile] = useState([{
        aname:'',
        alastName:'',
        agender:''
    }])

    

    const handleANameChange = (e,index)=>{
        let newform = [...adultProfile]
        newform[index][e.target.name]=e.target.value
        setadultProfile(newform)
        
    }
    const handleALastnameChange = (e,index)=>{
        let newform = [...adultProfile]
        newform[index][e.target.name]=e.target.value
        setadultProfile(newform)
    }
    const handleAGenderChange = (e,index)=>{
        let newform = [...adultProfile]
        newform[index][e.target.name]=e.target.value
        setadultProfile(newform)
    }

   
    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }

    /* const remove = (index)=>{
        const newForm = [...adultProfile]
        newForm.splice(index,1)
        setadultProfile(newForm) 
     } */

    
    

    return (
        <>
       
        <form onSubmit={handleSubmit}>
        {adultProfile.map ( (e,index)=>(
        <div className="border border-1 border-primary rounded mx-2 mt-2">
            <div><h5 className="div2 rounded">ADULT {props.onClick}</h5>
                <div className="mb-1">
                    <input className="mx-4 rounded" name="aname" value={e.aname} onChange={(e)=>handleANameChange(e,index)} placeholder="First and Middle Name" required/>
                    <input className="me-4 rounded" name="alastName" value={e.alastName} onChange={(e)=>handleALastnameChange(e,index)} placeholder="Last Name" required/>
                    <input  type="radio" name="agender" value="male" checked={e.agender=="male"} onChange={(e)=>handleAGenderChange(e,index)} ></input>
                    <label className="me-4">Male</label>
                    <input  type="radio" name="agender" value="female" checked={e.agender=="female"} onChange={(e)=>handleAGenderChange(e,index)} ></input>
                    <label>Female</label>
                </div>
        {/* {
                index==0 ? " " : 
            <button className="btn btn-light mt-2 me-2 ms-2" type="button" onClick={()=>remove(index)}>Remove</button>
        } */}
            </div>
        </div>
      ) ) } 
      
      </form>
      {/* {isShow &&
        <div>
            <h6>name:{adultProfile.aname}</h6>
        </div>
      }
       */}
      
        </>    
    )

}
export default AdultSection;

