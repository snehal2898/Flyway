import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'
import '../login/LoginSection.css'
import airlines from '../../assets/database/airlines/airlines_info'
import  Form  from "react-bootstrap/Form";



const AirlinesDesc = ()=>{

    const {aid} = useParams()
    const navigate = useNavigate()

    const airlineObj = airlines.find(air=>air.id==aid)

    const handleClick = ()=>{
        navigate("/")
    }



    const {id,nm,ra,io} = useParams()

    const [airlinesinfo,setAirlinesinfo] = useState({
        airlines_Id:id,
        name:nm,
        rating:ra,
        information:io
    })

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const AIRLINESINFO_API_URL = "http://localhost:8080/api/airlinesinfos"

    //edit the product on server
    const editProduct = (serverUrl,airinfo)=>{
        fetch(serverUrl,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                airlines_Id:airinfo.id,
                name:airinfo.name,
                rating:airinfo.rating,
                information:airinfo.information
            })
        })
            .then(response=>{
                if(response.ok) return response.json()
                else if(response.status=="404") return response.json()
                else throw Error(`Server Error ${response.status}`)
            })
            .then(data=>setMessage(data.message))
            .catch(err=>console.error(err))
    }

    //event handler for form submit event
    const handleSubmit = e =>{
        e.preventDefault();
        editProduct(AIRLINESINFO_API_URL+"/update-airlinesinfo",airlinesinfo);
        alert("Data saved!")
    }
    
    return(
        <>
            <div className='blur-background'>
                <div className="container" style={{marginTop:'200px'}}>
                    <div className="row justify-content-center">
                        <div className="col-md-7" >
                            <div className="card mb-5">
                                <div className="card-header d-inline">
                                    <button className='btn-close row-1 float-start' onClick={handleClick}></button>
                                    <h1 className='d-inline-block row-6' value={airlinesinfo.name}> {airlinesinfo.name} </h1>
                                </div>
                                <div className="card-body" style={{maxHeight:'430px',overflowY:'auto'}}>
                                    <div>
                                        <p value={airlinesinfo.information}>{airlinesinfo.information}</p>
                                    </div>
                                    <div className='float-end'>
                                         <h4>Rating</h4>
                                         <p className='text-warning' style={{fontSize:'2rem'}} value={airlinesinfo.rating}> {airlinesinfo.rating} </p>
                                    </div>     


                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>


        {/* <div className="container p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Airline Name</Form.Label>
                        <Form.Control style={{background:'lightgrey'}} type="text" value={airlinesinfo.name} 
                        onChange={(e)=>setAirlinesinfo({...airlinesinfo,name:e.target.value})} 
                        placeholder="Enter new product name" required readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Airline Rating</Form.Label>
                        <Form.Control  type="text" value={airlinesinfo.rating} onChange={(e)=>setAirlinesinfo({...airlinesinfo,rating:e.target.value})} placeholder="Enter new product brand" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Airline Info</Form.Label>
                        <Form.Control style={{background:'lightgrey'}} type="text" value={airlinesinfo.information} onChange={(e)=>setAirlinesinfo({...airlinesinfo,information:e.target.value})} placeholder="price in Indian rupees" required readOnly/>
                </Form.Group>
                <Button variant="success" type="submit">Save</Button>
            </Form>
        </div>
        {message &&
         <div>
            <ToastContainer position="middle-center">
                <Toast show={show} onClose={()=>setShow(!show)}>
                    <Toast.Header>
                        <strong>Info</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {message}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div> } */}
        </>
    )

    // return(
    //     <>
    //     <div className='blur-background'>
    //         {
    //             airlinesinfos.map(a=> <div key={a.airlines_Id} value={a.airlines_Id} className="container" style={{marginTop:'200px'}}>

    //                 <div className="row justify-content-center">
    //                     <div className="col-md-6" >
    //                         <div className="card mb-5">
    //                             <div className="card-header d-inline">
    //                                 <button className='btn-close row-1 float-start' onClick={handleClick}></button>
    //                                 <h1 className='d-inline-block row-6' value={airlinesinfo.name} > {a.name} </h1>
    //                             </div>    
    //                             <div className="card-body" style={{maxHeight:'500px',overflowY:'auto'}}>
    //                                 <div>
    //                                     <p value={airlinesinfo.information}>
    //                                         {a.information}
    //                                     </p>
    //                                 </div>
    //                                 <div className='float-end'>
    //                                     <h4>Rating</h4>
    //                                     <p className='text-warning' style={{fontSize:'2rem'}} value={airlinesinfo.rating}> {a.rating} </p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>
               
    //         )
    //         }
    //         </div>
    //     </>
    // )

}

export default AirlinesDesc;