import { Outlet,Link } from "react-router-dom";
import wallet from '../../assets/images/payment/wallet.png'

const PaymentMethod=()=>{
    // const navigate=useNavigate()


    return(
        <>
        <div className="p-5">
        <nav className="navbar  border border-3 rounded-4 w-25 h-50%" style={{marginTop:'150px'}}>
            <ul className="navbar-nav p-4">
                <p className="fw-bold">
                    <img src="https://www.goulburn.nsw.gov.au/files/content/public/v/51/council/rates-information-and-payment-options/payment.png?dimension=pageimage&w=480" alt="logo" height="40px"></img>Select Any Payment Method</p>
                <div className="border border-2 rounded m-2">
                <li className="nav-item">
                    <Link className="nav-link fw-bold " to="upi"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3jPY_IRMjG2XE-A36sQKzNH4rEd8Bru18Q&usqp=CAU" alt="logo" height="30px"></img>UPI</Link>
                </li>
                </div>
                <div className="border border-2 rounded m-2">
                <li className="nav-item">
                    <Link className="nav-link fw-bold" to="netbanking"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOQfwPo4FZRrYdBgh7mLKtMJKQCc-VWLTFg&usqp=CAU" alt="logo" height="30px" ></img> NetBanking</Link>
                </li>
                </div>
                <div className="border border-2 rounded m-2">
                <li className="nav-item">
                    <Link className="nav-link fw-bold" to="debit"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni-D7seZ61Th6kYw1iWjnsEhAORVLf1X1Uw&usqp=CAU" alt="logo" height="30px" ></img>  Debit</Link>
                </li>
                </div>
                <div className="border border-2 rounded m-2">
                <li className="nav-item">
                    <Link className="nav-link fw-bold" to="wallet">  
                    <img src="https://www.shutterstock.com/image-vector/ewallet-payment-application-mobile-phone-260nw-617928122.jpg" 
                        alt="logo" height="35px" ></img> Wallet</Link>
                </li>
                </div>
            </ul>
        </nav>
        {/* <nav className="navbar bg-secondary w-25 h-50%" style={{marginTop:'150px'}}>
            <ul className="navbar-nav p-4">
                <li className="nav-item">
                    <Link className="nav-link" to="upi">UPI</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="netbanking">NetBanking</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="debit">Debit</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="wallet">Wallet</Link>
                </li>
            </ul>
        </nav> */}
        </div>
        
            <Outlet/>

        
        
        </>
    )

}
export default PaymentMethod;