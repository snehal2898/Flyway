import { useState } from "react";
import '../login/LoginSection.css'

const ContactUsSection = ()=>{

    //STS

    const [contact,setContact] = useState({
        name:'',
        email:'',
        message:''
    })
    const [msg,setMsg] = useState('')
    const [show,setShow] = useState(true)

    // restful web service url
    const CONTACT_API_URL = "http://localhost:8080/api/contactus"

    // submit the data to server to add the product
    const addContact = (serverUrl)=>{
        fetch(serverUrl, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                name:contact.name,
                email:contact.email,
                message:contact.message
            })
        } )
            .then(response=>{
                if(response.ok) return response.json()
                else if(response.status=="404") return response.json()
                else throw Error(`Server Error ${response.status}`)
            })
            .then(data=>setMsg(data.msg))
            .catch(err=>console.error(err))
    }

    const handleSubmitContact = e =>{
        e.preventDefault();
        addContact(CONTACT_API_URL+"/add-contact")
        alert("Data Submitted!")
        setContact({
            name:'',
            email:'',
            message:''
        })
    }












//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmitForm = (event) => {
//         event.preventDefault();
//         window.alert('Submitted successfully');
//         const data = { name, email, message };
//         fetch('/api/contactus/contact', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data),
//         });
//       };
    


    //STS

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        window.alert('Submitted successfully');
      }


      return (
            <div className="blur-background">
                <div className="container" style={{marginTop:'200px'}}>
                    <div className="row justify-content-center ">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Contact Us</h1>
                                </div>
                                <div className="card-body">
    
                                    <form onSubmit={handleSubmitContact}>
    
                                        <div className="form-group">
                                            <label htmlFor="name">Name:</label>
                                            <input type="text" className="form-control" value={contact.name} 
                                                onChange={(e) => setContact({...contact,name:e.target.value})} required/>

                                            {/* <input type="text" className="form-control" id="name" name="name" value={formData.name}
                                                onChange={handleChange} required /> */}
                                        </div>
    
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" className="form-control" value={contact.email} 
                                                onChange={(e) => setContact({...contact,email:e.target.value})} required />

                                            {/* <input type="email" className="form-control" id="email" name="email" value={formData.email}
                                                onChange={handleChange} required /> */}
                                        </div>
    
                                        <div className="form-group">
                                            <label htmlFor="message">Message:</label>
                                            <textarea className="form-control" value={contact.message} 
                                                onChange={(e) => setContact({...contact,message:e.target.value})} rows="4" required />

                                            {/* <textarea className="form-control" id="message" name="message" value={formData.message}
                                                onChange={handleChange} rows="4" required /> */}
                                        </div>
    
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary rounded-3 mt-4">Submit</button>
                                        </div>
                                    </form>
                                    
    
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
          );
    
    
     
    
    //   return (
    //     <div className="blur-background">
    //         <div className="container" style={{marginTop:'200px'}}>
    //             <div className="row justify-content-center ">
    //                 <div className="col-md-4">
    //                     <div className="card">
    //                         <div className="card-header">
    //                             <h1>Contact Us</h1>
    //                         </div>
    //                         <div className="card-body">

    //                             <form onSubmit={handleSubmit}>

    //                                 <div className="form-group">
    //                                     <label htmlFor="name" >Name:</label>
    //                                     <input type="text" className="form-control" id="name" name="name" value={formData.name}
    //                                         onChange={handleChange} required />
    //                                 </div>

    //                                 <div className="form-group">
    //                                     <label htmlFor="email">Email:</label>
    //                                     <input type="email" className="form-control" id="email" name="email" value={formData.email}
    //                                         onChange={handleChange} required />
    //                                 </div>

    //                                 <div className="form-group">
    //                                     <label htmlFor="message">Message:</label>
    //                                     <textarea className="form-control" id="message" name="message" value={formData.message}
    //                                         onChange={handleChange} rows="4" required />
    //                                 </div>

    //                                 <div className="text-center">
    //                                     <button type="submit" className="btn btn-primary rounded-3 mt-4">Submit</button>
    //                                 </div>
    //                             </form>
                                

    //                         </div>
    //                     </div>    
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //   );

}

export default ContactUsSection;