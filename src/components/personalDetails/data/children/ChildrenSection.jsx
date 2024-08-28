import { useState } from "react"

function ChildrenSection(props){

    const [childProfile,setchildProfile] = useState([{
        childname:'',
        childlastName:'',
        childgender:'',
        cage:''
    }])


    const handleChildNameChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    }
    const handleChildLastnameChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    }
    const handleChildGenderChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    }
    const handlecAgeChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <>
        
        <form onSubmit={handleSubmit}>
        {childProfile.map ( (e,index)=>(
            <div className="border border-1 border-primary rounded mx-2 mt-2">
                <h5 className="div2 rounded">CHILD {props.onClick}</h5>
                <div className="mb-2">
                    <input className="mx-4 rounded" name="childname" value={e.childname} onChange={(e)=>handleChildNameChange(e,index)} placeholder="First and Middle Name" required/>
                    <input className="me-4 rounded" name="childlastName" value={e.childlastName} onChange={(e)=>handleChildLastnameChange(e,index)} placeholder="Last Name" required/>
                    <input  type="radio" name="childgender" value="male" checked={e.childgender=="male"} onChange={(e)=>handleChildGenderChange(e,index)} required></input>
                    <label className="me-4">Male</label>
                    <input  type="radio" name="childgender" value="female" checked={e.childgender=="female"} onChange={(e)=>handleChildGenderChange(e,index)} required></input>
                    <label>Female</label>
                    <div >
                        <input type="number" className=" rounded mx-4 mt-2" name="cage" placeholder="Age" value={e.cage} onChange={(e)=>handlecAgeChange(e,index)} max="12" min="2" required/>
                    </div>
                </div>
            </div>
            ) ) } 
            </form>
            
        </>
    )
}
export default ChildrenSection;