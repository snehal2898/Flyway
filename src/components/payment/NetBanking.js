import {useState} from "react";
import { Outlet } from "react-router-dom";
const NetBanking=()=>{

   const [netBank,setNetBank]=useState({bank:''})
    
   const handleBankChange=(e)=>{
   setNetBank({...netBank,bank:e.target.value})
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
      <div >
        <form onSubmit={handleSubmit}>
         <div>
            <ul>
               <li className="h3" style={{color:'midnightblue'}}>NetBanking</li>
            </ul>
         </div>
        <div >
        <label className="form-lebel" id="pbank">Select Banks</label>
        <select className="form-select" htmlFor="pbank" value={netBank.bank} onChange={handleBankChange} >
        <optgroup   >
         <option value="axis">Axis Bank</option>
         <option value="sbi" >SBI Bank</option>
         <option value="union">Union Bank </option>
         <option value="hdfc">HDFC Bank</option>
         <option value="statebank">State Bank of India</option>
         <option value="kotak">Kotak Bank</option>
         <option value="pnb">Punjab National Bank</option>
        <option  value="badoda ">Bank of Baroda</option>
        <option value="indiabank">Bank of India</option>
        <option value="canara">Canara Bank</option>
        <option value="overseas">Indian Overseas Bank</option>
        <option value="bandhan">Bandhan Bank</option>
        <option value="central">Central Bank of India</option>
        <option value="access">Access Bank </option>
        <option value="uco">UCO Bank</option>
        <option value="dcb">DCB Bank</option>
        <option value="federal">Federal Bank</option>
        <option value="icici">ICICI Bank</option>
        <option value="kotakmahin">Kotak Mahindra Bank</option>
        <option value="punsindbank">Punjab and Sind Bank</option>
        <option  value="maharashtra ">Bank of Maharashtra</option>
        <option  value="indore ">Bank of Indore</option>
        <option  value="hariyana">Bank of Hariyana </option>
        </optgroup>
        </select>
        </div>
        <button className="btn btn-primary d-inline flex flex-end rounded-3 P-4">Pay Now</button>
        </form>
      </div>
      </div>}

       {isSubmitted &&
       <div className="container container-2"  style={{backgroundColor: 'rgb(220, 237, 252)'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfSM4i_P8-H2Qjwk7z7a9AeWHeAhDKU6ouw&usqp=CAU" className="mx-auto d-block" alt="logo" height="60px"></img>
         <h4 className="text-center">Your payment is successful !</h4>
        </div>}

        <Outlet/>

        </>
     )

}
export default NetBanking;