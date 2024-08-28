import { Link } from "react-router-dom";
import airlines from "../../assets/database/airlines/airlines_info";
import AirlinesButton from "./AirlinesButton";

const AirlineList = ()=>{

    const airlineButtonList = airlines.map(air=> <Link to={"details/"+air.id} key={air.id}> <AirlinesButton airline={air}/> </Link> )

    return (
        <div>
            {airlineButtonList}
        </div>
    )

}

export default AirlineList;