import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FlightNavBar from './FlightNavBar';
import Home from '../components/Home';
import LoginSection from '../components/login/LoginSection';
import SignUpSection from '../components/signup/SignUpSection';
import AboutUsSection from '../components/aboutus/AboutUsSection';
import ContactUsSection from '../components/contactus/ContactUsSection';
import PageNotFound from '../components/PageNotFound';
import ViewDetails from '../components/home/ViewDetails';
import TravellerDetails from '../components/personalDetails/TravellerDetails';
import UpiSection from '../components/payment/UpiSection';
import NetBanking from '../components/payment/NetBanking';
import Wallet from '../components/payment/Wallet';
import Debit from '../components/payment/Debit';
import PaymentMethod from '../components/payment/PaymentMethod';
import AirlinesDesc from '../components/airlines/AirlinesDesc';
import AirlinesInfoView from '../components/airlines/AirlinesInfoView';
import AirlinesInfoAdd from '../components/airlines/AirlinesInfoAdd';
import AirlinesInfoEdit from '../components/airlines/AirlinesInfoEdit';

const FlightRouter = ()=>{

    

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FlightNavBar/>}>
                    <Route index element={<Home/>}/>
                        {/* <Route path='details/:aid' element={<AirlineDetails/>}  />  */}
                    
                    <Route path='/login' element={<LoginSection/>} />
                    <Route path='/signup' element={<SignUpSection/>} />
                    <Route path='/aboutus' element={<AboutUsSection/>} />
                    <Route path='/contactus' element={<ContactUsSection/>} />
                    <Route path='/viewdetail/:fid' element={<ViewDetails/>} />
                    <Route path='/traveller-details' element={<TravellerDetails/>} />
                    
                    {/* <Route path='/airlines-desc/:aid' element={<AirlinesDesc/>}/> */}
                    <Route path='edit/:id/:nm/:ra/:io' element={ <AirlinesDesc/> } />

                    <Route path='/payment-methods' element={<PaymentMethod/>} >
                        <Route path='upi' element={<UpiSection/>} />
                        <Route path='netbanking' element={<NetBanking/>} />
                        <Route path='debit' element={<Debit/>} />
                        <Route path='wallet' element={<Wallet/>} />
                    </Route>

                    {/* <Route path='view' element={ <AirlinesInfoView/> } />
                    <Route path='add' element={ <AirlinesInfoAdd/> } />
                    <Route path='edit/:id/:nm/:ra/:io' element={ <AirlinesInfoEdit/> } /> */}

                    <Route path='*' element={<PageNotFound/>} />   
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default FlightRouter;