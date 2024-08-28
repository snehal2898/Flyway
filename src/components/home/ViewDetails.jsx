import { Link, useParams } from 'react-router-dom'
import airlines from '../../assets/database/airlines_data'
import plane_logo from '../../assets/images/booking/logo.png'
import watch from '../../assets/images/booking/watch2.png'
import './FlightResults.css'
import '../login/LoginSection.css'


const ViewDetails = ()=>{

    //  const { origin, destination, departureDate, returnDate, classType, tripType } = searchData;

    //  const { origin } = useParams();

   
    const {fid} = useParams()

    const flightObj = airlines.find(air=>air.id==fid)


    return (
        
        <>
        
            <div className='text-center mx-3' style={{paddingTop:'180px'}} >

                <div className='row'>

                    <div className='col-md-9'>
                       <div className='container ' style={{width:'820px'}} >  
                            <div className='container'>
                                <h3 style={{fontFamily:'serif', fontWeight:'bold',color:'midnightblue'}} 
                                    className='text-center mt-4'>---Flight Details---</h3>
                                <div className='flight-details-div container rounded-2 border border-dark pb-3 mt-3' 
                                    style={{backgroundColor:'rgb(220, 237, 252)'}} >

                                    <div className='mt-3 border border-1 border-dark rounded-2'>
                                        <div className='row'>
                                            <div className='d-flex justify-content top-0 mt-1 '>
                                                <img src={plane_logo} alt='plane' height={40} width={40}  />
                                                <h5 className='ps-2 pt-1'>Departing</h5>
                                            </div>
                                        </div>
                        
                                        <div className='row container text-center' style={{width:'900px',margin:'auto'}}>
                    
                                            <div className='col-md-2'>
                                                <h6> from </h6>
                                            </div>
                                            <div className='col-md-2'>
                                                <h6> to city </h6>
                                            </div>

                                            <div className='col-md-2'>
                                                <h6> {flightObj.nonStop} </h6>
                                            </div>

                                            <div className='col-md-2'>
                                                <h6>{flightObj.timing}</h6>
                                            </div>

                                            <div className='col-md-2'>
                                                <h6> travel class </h6>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='row mt-4 container text-center' style={{width:'800px',margin:'auto'}} >
                                        <div className='col-md-2'>
                                            <div className='container' >
                                                <img src={flightObj.logo} alt={flightObj.arriveTime} style={{width:'50px',height:'50px'}} />
                                                <p style={{color:'black', fontWeight:'bold'}} > {flightObj.title} </p>
                                            </div>

                                        </div>

                                        <div className='col-md-2'>
                                            <div className='row'>
                                                <h6> from city </h6>
                                                <h6> date </h6>
                                            </div>
                                        </div>

                                        <div className='col-md-2'>
                                            <div className='row justify-content-center' style={{margin:'auto'}}>
                                                <img src={watch} alt='timing'  style={{borderRadius:'50%',height:'25px',width:'50px'}}  />
                                                <h6> {flightObj.timing} </h6>
                                            </div>
                                        </div>

                                        <div className='col-md-2'>
                                            <div className='row'>
                                                <h6>to city</h6>
                                                <h6> date </h6>
                                            </div>
                                        </div>

                                    </div>
                    

                                    <div className='row'>
                                        <div className='d-flex justify-content-end bottom-0'>
                                            <h5 className='m-1 p-2'>&#8377; {flightObj.farePrice}</h5>                        
                                            <Link to="/traveller-details" style={{textDecoration:'none'}}>
                                                <button className="rounded rounded-2 p-2 bg-warning" style={{color:'black',fontWeight:'bold'}}> Book Now  </button>
                                            </Link> 
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-md-3' style={{paddingLeft:'50px'}}>
                        <div className='hero-img' style={{height:'600px'}}>
                            <p className='text-center text-light fs-4 font-weight-bold mt-5 float-end' 
                                style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>
                                    Get Up to INR 5000 off on International Flights Booking
                            </p>   
                        </div>
                    </div>

                </div>
                
            </div>
        
        </>
    )

}

export default ViewDetails;