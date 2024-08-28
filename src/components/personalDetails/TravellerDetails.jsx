import { useContext, useState } from "react";
import './TravellerDetails.css';
import Button, { MyContext } from "./Button";
import ChildButton from "./ChildButton"
import InfantButton from "./InfantButton";
import PaymentMethod from "../payment/PaymentMethod";
import { Link, Outlet } from "react-router-dom";



const TravellerDetails = (props)=>{
    const [travellerProfile,setTravellerProfile] = useState({
        name:'',
        lastname:'',
        gender:'',
        cname:'',
        clastname:'',
        cgender:'',
        age:'',
        iname:'',
        ilastname:'',
        igender:'',
        dateofbirth:'',
        mobileno:'',
        email:'',
        pincode:'',
        state:'',
        address:'' 

    })



    const handleNameChange = (e)=>{
        setTravellerProfile({...travellerProfile,name:e.target.value})
    }
    const handleLastnameChange = (e)=>{
        setTravellerProfile({...travellerProfile,lastname:e.target.value})
    }
    const handleGenderChange = (e)=>{
        setTravellerProfile({...travellerProfile,gender:e.target.value})
    }
    const handleCNameChange = (e)=>{
        setTravellerProfile({...travellerProfile,cname:e.target.value})
    }
    const handleCLastnameChange = (e)=>{
        setTravellerProfile({...travellerProfile,clastname:e.target.value})
    }
    const handleCGenderChange = (e)=>{
        setTravellerProfile({...travellerProfile,cgender:e.target.value})
    }
    const handleAgeChange = (e)=>{
        setTravellerProfile({...travellerProfile,age:e.target.value})
    }
    const handleINameChange = (e)=>{
        setTravellerProfile({...travellerProfile,iname:e.target.value})
    }
    const handleILastnameChange = (e)=>{
        setTravellerProfile({...travellerProfile,ilastname:e.target.value})
    }
    const handleIGenderChange = (e)=>{
        setTravellerProfile({...travellerProfile,igender:e.target.value})
    }
    const handleDateofBirthChange = (e)=>{
        setTravellerProfile({...travellerProfile,dateofbirth:e.target.value})
    }
    const handleMobileNoChange = (e)=>{
        setTravellerProfile({...travellerProfile,mobileno:e.target.value})
    }
    const handleEmailChange = (e)=>{
        setTravellerProfile({...travellerProfile,email:e.target.value})
    }
    const handlePincodeChange = (e)=>{
        setTravellerProfile({...travellerProfile,pincode:e.target.value})
    }
    const handleStateChange = (e)=>{
        setTravellerProfile({...travellerProfile,state:e.target.value})
    }
    const handleAddressChange = (e)=>{
        setTravellerProfile({...travellerProfile,address:e.target.value})
    }  

    const [isSubmitted,setIsSubmitted] = useState(false)
     const handleSubmit = (e)=>{
        e.preventDefault()
        alert("Thanks For filling the details!")
        // setIsSubmitted(true) 
    }

 
    
    return ( 
        <>
        {!isSubmitted &&
        <div className="container w-50 rounded my-2 p-3">
            <form onSubmit={handleSubmit}>
            <div className="border border-primary rounded mb-2 div" style={{marginTop:'170px'}}>
            <div className="div1 rounded"><h2>Traveller Details</h2></div>
            <div><h5 className="mx-2 mt-2">ADULT(12 yrs<sup>+</sup>)</h5> 
            <div className="border border-1 border-primary rounded mx-2">
                <h5 className="div2 rounded">ADULT 1</h5>
                <div className="mb-2">
                    <input id="fn" className="mx-4 rounded" value={travellerProfile.name} onChange={handleNameChange} placeholder="First and Middle Name" required/>
                    <input id="ln" className="me-4 rounded" value={travellerProfile.lastname} onChange={handleLastnameChange} placeholder="Last Name" required/>
                    <input  type="radio" id="g1" name="gender" value="male" checked={travellerProfile.gender=="male"} onChange={handleGenderChange} required/>
                    <label className="me-4" htmlFor="g1">Male</label>
                    <input  type="radio" id="g2" name="gender" value="female" checked={travellerProfile.gender=="female"} onChange={handleGenderChange} required></input>
                    <label  htmlFor="g2">Female</label>
                </div>
            </div>  
            <Button/>
            </div>
            
            <div><h5 className="m-2">CHILDREN(2 to 12 yrs)</h5></div>
            <div className="border border-1 border-primary rounded mx-2">
                <h5 className="div2 rounded">CHILD 1</h5>
                <div className="mb-2">
                    <input id="cfn" className="mx-4 rounded" value={travellerProfile.cname} onChange={handleCNameChange} placeholder="First and Middle Name" required/>
                    <input id="cln" className="me-4 rounded" value={travellerProfile.clastname} onChange={handleCLastnameChange} placeholder="Last Name" required/>
                    <input  type="radio" id="gc1" name="cgender" value="male" checked={travellerProfile.cgender=="male"} onChange={handleCGenderChange} required></input>
                    <label className="me-4" htmlFor="gc1">Male</label>
                    <input  type="radio" id="gc2" name="cgender" value="female" checked={travellerProfile.cgender=="female"} onChange={handleCGenderChange} required></input>
                    <label  htmlFor="gc2">Female</label>
                    <div >
                        <input type="number" className=" rounded mx-4 mt-2" name="age" placeholder="Age" value={travellerProfile.age} onChange={handleAgeChange} max="12" min="2" required/>
                    </div>
                </div>
            </div>
            <ChildButton/>

            <div><h5 className="m-2">INFANT(15days to 2 yrs)</h5></div>
            <div className="border border-1 border-primary rounded mx-2">
                <h5 className="div2 rounded">INFANT 1</h5>
                <div className="mb-2">
                    <input id="ifn" className="mx-4 rounded" value={travellerProfile.iname} onChange={handleINameChange} placeholder="First and Middle Name" required/>
                    <input id="iln" className="me-4 rounded" value={travellerProfile.ilastname} onChange={handleILastnameChange} placeholder="Last Name" required/>
                    <input  type="radio" id="gi1" name="igender" value="male" checked={travellerProfile.igender=="male"} onChange={handleIGenderChange} required></input>
                    <label className="me-4" htmlFor="gi1">Male</label>
                    <input  type="radio" id="gi2" name="igender" value="female" checked={travellerProfile.igender=="female"} onChange={handleIGenderChange} required></input>
                    <label  htmlFor="gi2">Female</label>
                    <div >
                        <input type="date" className=" rounded mx-4 mt-2" name="dateofbirth" value={travellerProfile.dateofbirth} onChange={handleDateofBirthChange} required min="15 days" max="2 years"/>
                    </div>
                </div>
            </div>
            <InfantButton/>



            <div className="border border-primary rounded m-2">
                <h5 className="mx-3">Booking details will be send to</h5>
                <div className="mx-5 mb-2">
                    <label className="me-3" htmlFor="mb"><b>Mobile No:</b> </label>
                    <input id="mb" className="me-5 rounded" type="tel" name="moblieno" value={travellerProfile.mobileno} onChange={handleMobileNoChange} placeholder="Mobile No" pattern="[0-9]{10}" maxLength={10}/>
                    <label className="me-3" htmlFor="eml"><b>Email:</b> </label>
                    <input id="eml" className="rounded" type="email" name="email" value={travellerProfile.email} onChange={handleEmailChange} placeholder="Email"/>
                </div>
            </div>
            <div className="border border-primary rounded m-2">
                <h5 className="mx-3">Your Pincode and Address<small> (Required for generating invoice)</small></h5>
                <div className="mb-2">
                    <label htmlFor="pc" className="div3"><b>Pincode:</b></label>
                    <label htmlFor="st" className="div4"><b>State:</b></label>
                    <label htmlFor="ad" ><b>Address:</b></label><br/>
                    <input id="pc" className="rounded me-4 ms-3 mt-1" name="pincode" value={travellerProfile.pincode} onChange={handlePincodeChange} pattern="[0-9]{6}" maxLength={6}/>
                    
                    <input id="st" className="rounded me-4" name="state" value={travellerProfile.state} onChange={handleStateChange}/>
                    
                    <input id="ad" className="rounded me-5" name="address" value={travellerProfile.address} onChange={handleAddressChange}/>
                </div>
            </div> 

            
            <div className="my-2 text-center">
                <button className="btn btn-primary rounded-3 p-2 m-3" type="submit"  >
                    <Link to='/payment-methods' style={{textDecoration:'none',color:'white'}}>Continue </Link>
                    </button>       
            </div>
            </div>
            </form>
        </div> }

        
        {/* {isSubmitted &&
            <PaymentMethod/>
            // <Outlet/>
            
        }  */}
        </>
    ) 
}
export default TravellerDetails;