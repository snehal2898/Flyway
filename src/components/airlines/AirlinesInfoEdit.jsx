import { useState } from "react";
import {useParams} from 'react-router-dom';
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const AirlinesInfoEdit = ()=>{

    const {airlines_Id,nm,ra,io} = useParams()

    const [airlinesinfo,setAirlinesinfo] = useState({
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
                airlines_Id:airlines_Id,
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
        <div className="container p-3">
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
        </div> }
        </>
    )
}

export default AirlinesInfoEdit;