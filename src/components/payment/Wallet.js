import { useState } from "react"
import { Outlet } from "react-router-dom"


const  Wallet=()=>{
   const [wall,setWall] = useState({wallet:''})

    const  handleWalletChange=(e)=>{
        setWall({wall,wallet:e.target.value})
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
            <form onSubmit={handleSubmit}>
                <div>
                    <ul>
                        <li className="h3" style={{color:'midnightblue'}}>Wallet</li>
                    </ul>
                </div>
                <div className="form-check">
             <label className="form-check-label" htmlFor="w1">paytm</label>
             <input className="form-check-input" type="radio" id="w1" name="wallpay" value="paytm" checked={wall.wallet=="paytm"} onChange={handleWalletChange} required ></input><br/>
             <label className="form-check-label" htmlFor="w2" >phone pe</label>
             <input className="form-check-input" type="radio" id="w2" name="wallpay" value="phonepe" checked={wall.wallet=="phonepe"} onChange={handleWalletChange} required ></input><br/>
             <label className="form-check-label" htmlFor="w3">amazon pay</label>
             <input className="form-check-input" type="radio" id="w3" name="wallpay" value="amazonpay" checked={wall.wallet=="amazonpay"} onChange={handleWalletChange} required ></input><br/>
             <label className="form-check-label" htmlFor="w4">GPay</label>
             <input className="form-check-input" type="radio" id="w4" name="wallpay" value="gpay" checked={wall.wallet=="gpay"} onChange={handleWalletChange} required ></input><br/>
             <label className="form-check-label" htmlFor="w5">Jio Money</label>
             <input className="form-check-input" type="radio" id="w5" name="wallpay" value="jiomoney" checked={wall.wallet=="jiomoney"} onChange={handleWalletChange} required ></input><br/>
             <label className="form-check-label" htmlFor="w6">Airtel Thanks</label>
             <input className="form-check-input" type="radio" id="w6" name="wallpay" value="airtelthanks" checked={wall.wallet=="airtelthanks"} onChange={handleWalletChange} required ></input><br/>
             <label className="form-check-label" htmlFor="w7">Bharat Pay</label>
             <input className="form-check-input" type="radio" id="w7" name="wallpay" value="bharat" checked={wall.wallet=="barat"} onChange={handleWalletChange} required ></input><br/>
             <label className="form-check-label" htmlFor="w8">Samsung Pay</label>
             <input className="form-check-input" type="radio" id="w8" name="wallpay" value="samsung" checked={wall.wallet=="samsung"} onChange={handleWalletChange} required ></input><br/>
             
             </div>
             
             <button className="btn btn-primary d-inline flex flex-end rounded-3 P-4">Pay Now</button>
    </form>
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
export default Wallet