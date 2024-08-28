import { useState } from "react";
import Home from "../Home";
import FlightResults from "../home/FlightResults";

const BookingFlights = ()=>{

    const [searchData, setSearchData] = useState(null);

    const handleSearch = (data) => {
        setSearchData(data);
    };

    return (
        <div className="container " style={{marginTop:'300px'}}>
            {/* <Home onSearch={handleSearch} /> */}
            {searchData && <FlightResults searchData={searchData} />}
        </div>
    );

}

export default BookingFlights;