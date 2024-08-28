import { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";  
import DatePicker from "react-datepicker";  
import departCities from "../../assets/database/searchdata/depart_cities";
import arrivalCities from "../../assets/database/searchdata/arrival_cities";

const FlightSearch = ({onSearch})=>{

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripClass, setTripClass] = useState('Economy');
  const [tripType, setTripType] = useState('Round Trip');
  const [minReturnDate, setMinReturnDate] = useState('');

  //STS
  const [products,setProducts] = useState([])
  const [selectedOption, setSelectedOption] = useState();
  const [arrproducts,setArrproducts] = useState([])
  const [arrselectedOption,setArrSelectedOption] = useState();
    const [message,setMessage] = useState('')
    const [show,setShow] = useState(true)
    const navigate = useNavigate()

    const {airlines_Id,nm,ra,io} = useParams()
    const [airlinesinfo,setAirlinesinfo] = useState({
      dCitiesName:nm
  })




  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
    setMinReturnDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

    // restful web service url
    const PRODUCT_API_URL = "http://localhost:8080/api/departurecities"

    const PRODUCTARR_API_URL = "http://localhost:8080/api/arrivalcities"

    // get all the products from restful web service
    const getAllProducts = (serverUrl) =>{
        // react fetch api to get data from backend
        // asynchronous call (AJAX)
        fetch(serverUrl, {
            method:'GET',
            headers:{       // represents request header
                'Accept':'application/json'
            }
        })  // fetches data from server and provides request header configuration
            .then( response => {
                if(response.ok)
                    return response.json()
                else if(response.status=="404")
                    return response.json()
                else
                    throw Error(`Server Error ${response.status}`)
            } )  // gets the response object from server
            .then( data=> setProducts(data) )  // if response OK (successful), then gets response data
            .catch( err=> console.error(err) )  // handles server error, if any
    }

    const getAllArrProducts = (serverUrl) =>{
      // react fetch api to get data from backend
      // asynchronous call (AJAX)
      fetch(serverUrl, {
          method:'GET',
          headers:{       // represents request header
              'Accept':'application/json'
          }
      })  // fetches data from server and provides request header configuration
          .then( response => {
              if(response.ok)
                  return response.json()
              else if(response.status=="404")
                  return response.json()
              else
                  throw Error(`Server Error ${response.status}`)
          } )  // gets the response object from server
          .then( data=> setArrproducts(data) )  // if response OK (successful), then gets response data
          .catch( err=> console.error(err) )  // handles server error, if any
  }

    // call react hook useEffect to fetch data from server continuously
    useEffect( ()=>{
        getAllProducts(PRODUCT_API_URL+"/all");
    },[products]);

    useEffect( ()=>{
      getAllArrProducts(PRODUCTARR_API_URL+"/all");
    },[arrproducts])

  //STS

  const handleSearch = (airinfo) => {
    //navigate(`/search/${airinfo.dCitiesId}/${airinfo.dCitiesName}`)
    onSearch({ origin, destination, departureDate, returnDate, tripClass, tripType , selectedOption, arrselectedOption});
  };

  const handleDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const today = new Date().toISOString().split('T')[0];


    return (

        <div className="flight-search">
            <form>

              <div className='row mb-3 container' style={{margin:'auto',width:'900px'}}>
                <div className="col-md-3 mt-3" >
                <label htmlFor="origin" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    From
                  </label>
                  <select className="form-select" id="origin" value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}  
                           style={{fontSize:'20px'}} required >
                          <option value="">Select Origin</option>
                          {
                            products.map(product=> <option key={product.id} value={product.dCitiesName}> {product.dCitiesName} </option> )
                          }

                          {/* {departCities.map((airport, index) => (
                          <option key={index} value={airport.name}>{airport.name}</option>
                    ))}                     */}
                  </select>  
                              
                </div>

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="destination" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    To
                  </label>
                  <select className="form-select" id="destination"  value={arrselectedOption}
                      onChange={(e) => setArrSelectedOption(e.target.value)} style={{fontSize:'20px'}} required>
                          <option value="">Select Destination</option>
                          {
                            arrproducts.map(arriveproduct=> <option key={arriveproduct.id} value={arriveproduct.aCitiesName}> {arriveproduct.aCitiesName} </option> )
                          }
                          {/* {arrivalCities.map((airport, index) => (
                          <option key={index} value={airport.name}>{airport.name}</option>
                    ))} */}
                  </select>                  
                </div>

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="departureDate" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Depart Date
                  </label>

                  <input type="date" className="form-control" value={departureDate} onChange={handleDepartureDateChange}  
                          style={{fontSize:'20px'}} min={today} required/>

                  {/* <input type="date" className="form-control" id="departureDate" value={departureDate} minDate={new Date()}
                        onChange={handleDepartureDateChange} style={{fontSize:'20px'}}  required /> */}
                  {/* <input type="date" className="form-control" id="departureDate" value={departureDate} min={today} 
                        onChange={handleDateChange} style={{fontSize:'20px'}}  required /> */}
                </div>

                {tripType === 'Round-trip' && (

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="returnDate" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Return Date
                  </label>

                  <input type="date" className="form-control" id="returnDate" value={returnDate} 
                          onChange={handleReturnDateChange} min={minReturnDate} style={{fontSize:'20px'}}  />

                   {/* <input  type="date" className="form-control" id="returnDate" value={returnDate} 
                        onChange={handleReturnDateChange} minDate={minReturnDate}
                        style={{fontSize:'20px'}} /> */}
      
                  {/* <input  type="date" className="form-control" id="returnDate" value={returnDate}  min={today} 
                        onChange={(e) => setReturnDate(e.target.value)}
                        style={{fontSize:'20px'}} /> */}
                </div>

                )}

              </div> 

              <div className='row mb-3 container text-center' style={{margin:'auto',width:'400px'}}>
                <div className='col mt-6' >
                  <label htmlFor="classType" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Travel Class
                  </label>
                  <select className="form-select" id="classType" value={tripClass} 
                          onChange={(e) => setTripClass(e.target.value)} style={{fontSize:'20px'}} required >
                            <option value="Economy">Economy</option>
                            <option value="Business">Business Class</option>
                            <option value="First">First Class</option>                
                  </select>     
                </div>

                <div className='col mt-6' >
                  <label htmlFor="tripType" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Trip Type
                  </label>
                  <select className="form-select" id="tripType" value={tripType} 
                          onChange={(e) => setTripType(e.target.value)} style={{fontSize:'20px'}} required >
                            <option value="One-way">One-way</option>
                            <option value="Round-trip">Round-trip</option>                
                  </select>     
                </div>
              </div> 


              <div className='row mb-3 container text-center' style={{margin:'auto'}}>
                <div className='col mt-5'>
                  <button onClick={handleSearch} className="btn btn-primary rounded-3 p-2" 
                          style={{fontSize:'20px',fontWeight:'bold'}} >
                            Search Flights                           
                  </button>
                </div>
              </div> 


            </form>

        </div> 

    );

}

export default FlightSearch;