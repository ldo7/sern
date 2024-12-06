import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const id = 0;
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    
    // LOGIN TO USER ACCOUNT
    axios.post('/login')
    .then(res => {
      // setUser(res.data[0])
      console.log(user)
      navigate("/")
      // !user ? navigate(`/profile/${user.user_id}`): navigate('/login') 
      console.log(res.data)
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit = {handleSubmit}>
        {/* <input type="text" placeholder="First Name" value={user.firstName} onChange={(e)=>setUser({...user, firstName: e.target.value})} required />
        <input type="text" placeholder="Last Name" value={user.lastName} onChange={(e)=>setUser({...user, lastName: e.target.value})} required /> */}
        <input type="email" placeholder="Email" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} required />
        <input type="password" placeholder="Password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login