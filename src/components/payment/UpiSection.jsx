import { useState } from "react";
import { Outlet } from "react-router-dom";
import './UpiSection.css'


const UpiSection=()=>{
   const [upi,setUpi] = useState({upi:''})
     const handleUpiChange=(e)=>{
        setUpi({...upi,upi:e.target.value})
    }
    const [isSubmitted,setIsSubmitted] = useState(false)
     const handleSubmit=(e)=>{
        e.preventDefault()
        alert()
        setIsSubmitted(true)
     }
return(
        <>
        {!isSubmitted &&
        <div className="container  w-50 my-5 rounded text-dark p-3"  style={{backgroundColor: 'rgb(220, 237, 252)'}}>
        <div>
            <div>
            {/* <button onClick={()=>{setIsSubmitted(false)}}>&#8592; </button> */}
            <ul>
                <li className="h3" style={{color:'midnightblue'}} >UPI</li>
            </ul>
            </div>
            <form onSubmit={handleSubmit}>
             <label className="form-lebel fw-normal" htmlForfor="uid">Enter UPI ID</label>
             <input className="form-control border border-2 border-secondary rounded-4"  pattern="[0-9]{12}" maxLength={12} id="uid" value={upi.upi} onChange={handleUpiChange} placeholder='enter your upi id' required></input>
             <div>
              <button className="btn btn-primary d-inline flex flex-end rounded-3 P-4">Pay Now</button>
             </div>
            </form>
        </div>
        </div>}
        {isSubmitted &&
        <div className="container container-2"  style={{backgroundColor: 'rgb(220, 237, 252)'}}> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfSM4i_P8-H2Qjwk7z7a9AeWHeAhDKU6ouw&usqp=CAU" className="mx-auto d-block" alt="logo" height="60px"></img>
            {/* <h3 className="text-left">Your UPI ID: {upi.upi}</h3> */}
            <h4 className="text-center">Your payment is successful !</h4>
            </div>
            }



       
            <Outlet/>
        </>
       )
}
export default UpiSection