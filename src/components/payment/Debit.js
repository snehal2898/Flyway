import {useState} from 'react'
import { Outlet } from 'react-router-dom'
const Debit=()=>{

     const [debit,setDebit]=useState({card:'',
                                      monthYear:'',
                                      holderName:'',
                                      cvv:''
                                    })

    const handleCardChange=(e)=>{
        setDebit({...debit,card:e.target.value})
    }
    const handleDateChange=(e)=>{
        setDebit({...debit,monthYear:e.target.value})
    }
    const handleHolderChange=(e)=>{
        setDebit({...debit,holderName:e.target.value})
    }
    const handleCvvChange=(e)=>{
        setDebit({...debit,cvv:e.target.value})
    }
    const [isSubmitted,setIsSubmitted]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("")
        setIsSubmitted(true)
    }

    return(
        <>


{!isSubmitted &&
        <div className="container  w-50 my-5 rounded text-dark p-3"  style={{backgroundColor: 'rgb(220, 237, 252)'}}> 
         <form onSubmit={handleSubmit}>
           <div>
            <ul>
                <li className="h3" style={{color:'midnightblue'}}> Debit / Credit Card </li>
            </ul>
            <label className="form-lebel" htmlFor="d1" >Enter Card Number</label>
            <input className="form-control" pattern="[0-9]{12}" maxLength={12} id="d1"  value={debit.card} onChange={handleCardChange} placeholder="Enter Your card Number" required></input>
            <label className="form-label" htmlFor="d2">Select credit card expiry month and year</label>
            <input className="form-control" id="d2" type="month" value={debit.monthYear} onChange={handleDateChange} required >
            </input>
            <label className="form-lebel" htmlFor="d3">Card Holder Name</label>
            <input className="form-control" type="text" id="d3" value={debit.holderName} onChange={handleHolderChange} placeholder="Enter Card Holder Name" required ></input>
            <label className="form-lebel" htmlFor="d4">Enter CVV</label>
            <input className="form-control" id="d4" pattern="[0-9]{3}" maxLength={3} value={debit.cvv} onChange={handleCvvChange} placeholder="Enter CVV" required ></input>
            
            <button className="btn btn-primary d-inline flex flex-end rounded-3 P-4" >Pay Now</button>
           </div>
         </form>
</div>}

    {isSubmitted &&
         <div className="container container-2"  style={{backgroundColor: 'rgb(220, 237, 252)'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfSM4i_P8-H2Qjwk7z7a9AeWHeAhDKU6ouw&usqp=CAU" 
            className="mx-auto d-block" alt="logo" height="60px"></img>
               <h4 className='text-center'>Your payment is successful !</h4>
        </div>}



    <Outlet/>
</>
)
}
export default Debit;