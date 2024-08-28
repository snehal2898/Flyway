import { Outlet,Link } from 'react-router-dom'
import logo from '../assets/images/home/logo.png'

const FlightNavBar = ()=>{

    return(
        <div>
            <nav className="navbar navbar-expand-md fixed-top rounded-bottom-5" style={{backgroundColor:'rgb(1, 175, 244)'}} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" 
                        style={{marginLeft:'180px',fontSize:'35px',marginTop:'55px',
                                fontWeight:'bold',
                                color:'midnightblue',
                                fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
            
                        <img className="d-inline-block text-align-middle" src={logo} alt="logo" width="100" height="90"/>FLYWAY
                    </a>

                    <div id="collapseid" style={{float:'inline-end'}} >

                        <ul className="navbar-nav mb-5"   >
                            <li className="nav-item p-2">
                                <Link to='/' className="nav-link btn btn-outline-warning text-white" 
                                            style={{fontWeight:'bold',fontSize:'18px'}}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to='/login' className="nav-link btn btn-outline-warning text-white" 
                                            style={{fontWeight:'bold',fontSize:'18px'}}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to='/signup' className="nav-link btn btn-outline-warning text-white" 
                                            style={{fontWeight:'bold',fontSize:'18px'}}>
                                    SignUp
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to='/aboutus' className="nav-link btn btn-outline-warning text-white" 
                                            style={{fontWeight:'bold',fontSize:'18px'}}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to='/contactus' className="nav-link btn btn-outline-warning text-white" 
                                            style={{fontWeight:'bold',fontSize:'18px'}}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )

}

export default FlightNavBar;