import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const host = process.env.REACT_APP_BACKEND_URL;

const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    
    if(json.success){
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      navigate("/")
      props.showAlert("Logged in Successfully", "success")
    }
    else{
      alert("Invalid credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    props.showAlert("Invalid Details", "danger")
  }

  return (
    <div className='mt-3'>
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} onChange={onChange} name='email' id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' id="password" />
        </div>
        <button type="submit" className="btn" style={{ backgroundColor: "#3D0182", color: "white", border: "none" }}>Submit</button>
      </form>
    </div>
  )
}

export default Login
