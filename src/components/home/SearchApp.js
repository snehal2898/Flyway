import { useState } from "react";
import FlightSearch from "./SearchFlight";
import FlightResults from "./FlightResults";

const SearchApp = ()=>{

    const [searchData, setSearchData] = useState(null);

    const handleSearch = (data) => {
        setSearchData(data);
    };

    return (
        <div className="container " style={{marginTop:'300px'}}>
            <FlightSearch onSearch={handleSearch} />
            {searchData && <FlightResults searchData={searchData} />}
        </div>
    );

}

export default SearchApp;