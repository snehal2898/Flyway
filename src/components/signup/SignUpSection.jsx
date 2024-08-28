import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../login/LoginSection.css'

const SignUpSection = ()=>{

//STS

const [signUp,setSignUp] = useState({
  name:'',
  email:'',
  password:''
})
const [msg,setMsg] = useState('')
const [show,setShow] = useState(true)
const navigate = useNavigate()

// restful web service url
const SIGNUP_API_URL = "http://localhost:8080/api/signup"

// submit the data to server to add the product
const addSignUpData = (serverUrl)=>{
  fetch(serverUrl, {
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
      },
      body:JSON.stringify({
          name:signUp.name,
          email:signUp.email,
          password:signUp.password
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

const handleSubmitSignUp = e =>{
  e.preventDefault();
  addSignUpData(SIGNUP_API_URL+"/add-signup")
  alert("Data Submitted!")
  navigate(`/`)
  setSignUp({
      name:'',
      email:'',
      password:''
  })
}

//STS




    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(formData);
    };

    return (
      <div className='blur-background'>
        <div className="container" style={{marginTop:'200px'}}>
          <div className="row justify-content-center ">
            <div className="col-md-4">
              <div className="card">

              <div className="card-header">
                  <h1>Sign Up</h1>
              </div>

            <div className="card-body">
              <form onSubmit={handleSubmitSignUp}>
                  <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username"
                     value={signUp.name} onChange={(e) => setSignUp({...signUp,name:e.target.value})} required />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" 
                    value={signUp.email} onChange={(e) => setSignUp({...signUp,email:e.target.value})} required />
                  </div>
                  <div className="">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" 
                    value={signUp.password} onChange={(e) => setSignUp({...signUp,password:e.target.value})} required />
                  </div>
                  <div className='d-inline float-end '>
                      <p>Already have an account? <Link style={{textDecoration:'none'}} to='/login'>Login</Link>    </p>
                  </div>

                  <div className="container mt-5 mb-2 ">
                    <div className="row">
                      <div className="col text-center">
                        <button type="submit" className="btn btn-primary col text-center">Sign Up
                          {/* <Link style={{textDecoration:'none',color:'white'}}to='/'>
                            Sign Up
                          </Link> */}
                        </button>
                      </div>
                    </div>
                  </div>


              </form>
            </div>  


    </div>
    </div>
    </div>
    </div>
    </div>

    );
      

    // return (
    //   <div className='blur-background'>
    //     <div className="container" style={{marginTop:'200px'}}>
    //       <div className="row justify-content-center ">
    //         <div className="col-md-4">
    //           <div className="card">

    //           <div className="card-header">
    //               <h1>Sign Up</h1>
    //           </div>

    //         <div className="card-body">
    //           <form onSubmit={handleSubmit}>
    //               <div className="mb-2">
    //                 <label htmlFor="username" className="form-label">Username</label>
    //                 <input type="text" className="form-control" id="username" name="username"
    //                  value={formData.username} onChange={handleChange} required />
    //               </div>
    //               <div className="mb-2">
    //                 <label htmlFor="email" className="form-label">Email address</label>
    //                 <input type="email" className="form-control" id="email" name="email" 
    //                 value={formData.email} onChange={handleChange} required />
    //               </div>
    //               <div className="">
    //                 <label htmlFor="password" className="form-label">Password</label>
    //                 <input type="password" className="form-control" id="password" name="password" 
    //                 value={formData.password} onChange={handleChange} required />
    //               </div>
    //               <div className='d-inline float-end '>
    //                   <p>Already have an account? <Link style={{textDecoration:'none'}} to='/login'>Login</Link>    </p>
    //               </div>

    //               <div className="container mt-5 mb-2 ">
    //                 <div className="row">
    //                   <div className="col text-center">
    //                     <button type="submit" className="btn btn-primary col text-center">
    //                       <Link style={{textDecoration:'none',color:'white'}}to='/'>
    //                         Sign Up
    //                       </Link>
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>


    //           </form>
    //         </div>  


    // </div>
    // </div>
    // </div>
    // </div>
    // </div>

    // );

}

export default SignUpSection;