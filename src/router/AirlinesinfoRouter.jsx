import { BrowserRouter, Route, Routes } from "react-router-dom";
import AirlinesInfoView from "../components/AirlinesInfoView";
import AirlinesinfoNavbar from "./AirlineinfoNavbar";
import AirlinesInfoAdd from "../components/AirlinesInfoAdd";
import AirlinesInfoEdit from "../components/AirlinesInfoEdit";

const AirlinesinfoRouter = ()=>{

    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<AirlinesinfoNavbar/>}>
                    <Route path="view" element={<AirlinesInfoView/>}/>
                    <Route path="add" element={<AirlinesInfoAdd/>}/>
                    <Route path="edit/:airlines_Id/:nm/:ra/:io" element={<AirlinesInfoEdit/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}
export default AirlinesinfoRouter;