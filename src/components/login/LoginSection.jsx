import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './LoginSection.css'
import {Link} from 'react-router-dom'

const LoginSection = ()=>{


  //STS

  const [login,setLogin] = useState({
  username:'',
  password:''
})
const [msg,setMsg] = useState('')
const [show,setShow] = useState(true)
const navigate = useNavigate()

// restful web service url
const LOGIN_API_URL = "http://localhost:8080/api/login"

// submit the data to server to add the product
const addLoginData = (serverUrl)=>{
  fetch(serverUrl, {
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
      },
      body:JSON.stringify({
          username:login.username,
          password:login.password
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

const handleSubmitLogin = e =>{
  e.preventDefault();
  addLoginData(LOGIN_API_URL+"/add-login")
  alert("Login Successful!")
  navigate(`/`)
  setLogin({
      username:'',
      password:''
  })
}

//STS




    return (

        <div className='blur-background'>
          <div className="container" style={{marginTop:'200px'}}>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card ">

                  <div className="card-header">
                    <h1>Welcome</h1>
                  </div>

                  <div className="card-body">

                    <form onSubmit={handleSubmitLogin}>
                      <div className="form-group mb-2">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name='username' 
                        value={login.username} onChange={(e) => setLogin({...login,username:e.target.value})} required/>
                      </div>

                      <div className="form-group ">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name='password' 
                        value={login.password} onChange={(e) => setLogin({...login,password:e.target.value})} required/>
                      </div>
                      
                      <div className='d-inline float-end'>
                         <p>Don't have an account? <Link style={{textDecoration:'none'}} to='/signup'>SignUp</Link> </p>
                      </div>

                      <div className="container mt-5 mb-2 ">
                        <div className="row">
                          <div className="col text-center">
                            <button type='submit' className="btn btn-primary btn-block mt-3">
                              <Link style={{textDecoration:'none',color:'white'}}to='/'>
                                Login
                              </Link>
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

}

export default LoginSection;