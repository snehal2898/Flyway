import { useState } from "react"

function InfantSection(props){

    const [infantProfile,setinfantProfile] = useState([{
        infantname:'',
        infantlastname:'',
        infantgender:'',
        idateofbirth:''
    }])
    const handleInfantNameChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    }
    const handleInfantLastnameChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    }
    const handleInfantGenderChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    }
    const handleIDateofBirthChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        {infantProfile.map ( (e,index)=>(
            <div className="border border-1 border-primary rounded mx-2 mt-2">
                <h5 className="div2 rounded">INFANT {props.onClick}</h5>
                <div className="mb-2">
                    <input className="mx-4 rounded" name="infantname" value={e.infantname} onChange={(e)=>handleInfantNameChange(e,index)} placeholder="First and Middle Name" required/>
                    <input className="me-4 rounded" name="infantlastname" value={e.infantlastname} onChange={(e)=>handleInfantLastnameChange(e,index)} placeholder="Last Name" required/>
                    <input  type="radio" name="infantgender" value="male" checked={e.infantgender=="male"} onChange={(e)=>handleInfantGenderChange(e,index)} required></input>
                    <label className="me-4">Male</label>
                    <input  type="radio" name="infantgender" value="female" checked={e.infantgender=="female"} onChange={(e)=>handleInfantGenderChange(e,index)} required></input>
                    <label>Female</label>
                    <div >
                        <input type="date" className=" rounded mx-4 mt-2" name="idateofbirth" value={e.idateofbirth} onChange={(e)=>handleIDateofBirthChange(e,index)} required/>
                    </div>
                </div>
            </div>
            ) ) } 
            </form>
        </>
    )

}
export default InfantSection;