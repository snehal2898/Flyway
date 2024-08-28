import { useState } from "react";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const AirlinesInfoAdd = ()=>{

    const [airlinesinfo,setAirlinesinfo] = useState({
        name:'',
        rating:'',
        information:''
    })

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const AIRLINESINFO_API_URL = "http://localhost:8080/api/airlinesinfos"

    // submit the data to server to add the product
    const addInfo = (serverurl)=>{
        fetch(serverurl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                name:airlinesinfo.name,
                rating:airlinesinfo.rating,
                information:airlinesinfo.information
                
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
        addInfo(AIRLINESINFO_API_URL+"/add-airlinesinfo");
        alert("Data submitted!")
        setAirlinesinfo({
            name:'',
            rating:'',
            information:''
        })
    }

    return(
        <>
        <div className="container p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Airline Name</Form.Label>
                        <Form.Control type="text" value={airlinesinfo.name} onChange={(e)=>setAirlinesinfo({...airlinesinfo,name:e.target.value})} placeholder="Enter new product name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Airline Rating</Form.Label>
                        <Form.Control type="text" value={airlinesinfo.rating} onChange={(e)=>setAirlinesinfo({...airlinesinfo,rating:e.target.value})} placeholder="Enter new product brand" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Airline Info</Form.Label>
                        <Form.Control type="text" value={airlinesinfo.information} onChange={(e)=>setAirlinesinfo({...airlinesinfo,information:e.target.value})} placeholder="price in Indian rupees" required/>
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
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
                        {message
                        }
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div> }
        </>
    )

}
export default AirlinesInfoAdd;