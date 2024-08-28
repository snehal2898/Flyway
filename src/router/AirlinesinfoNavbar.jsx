import {Link,Outlet} from 'react-router-dom'

const AirlinesinfoNavbar = ()=>{

    return(
        <div>
            <nav className='navbar navbar-expand-lg bg-primary' data-bs-theme="dark">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="view">Database</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="add">Add new Product</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )

}
export default AirlinesinfoNavbar;