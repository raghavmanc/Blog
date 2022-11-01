import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

const Login = () => {
  const [inputs,setInputs] = useState({
    username: "",
    password: ""
  })
  
  const [err, setError] = useState(null)
  
  // Whenever the input changes we update the state value using handleChange
  
  const handleChange = e => {
    //6 state mistakes react lamadev - checkout the video
    setInputs( prev => ({ ...prev, [e.target.name] : e.target.value }))
  } 
  
  const navigate = useNavigate()
  
  //async function because we are making a request to an API - install axios in client 
  const handleSubmit = async e => {
  
      e.preventDefault() // Because we dont want to refreseh our page when we hit the register button 
      try{
        await axios.post("/auth/login", inputs)
        navigate("/")
      }catch(err){
        setError(err.response.data);
      } 
  } 
  
    return (
      <div className='auth'>
        <h1>Login</h1> 
  
        <form>
           <input required name = "username" type="text" placeholder='username' onChange={handleChange}></input>
           <input required name = "password" type="password" placeholder='password'  onChange={handleChange}></input>
          <button onClick={handleSubmit}>Login</button>
          { err && <p>{err}</p>}
          <span>Dont have an account?
            <Link to="/register"> Register </Link>
          </span>
        </form>
  
        </div>
    )
  }
  
  export default Login