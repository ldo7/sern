import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault() //prevent pg refresh

    // API REQ - ADD NEW USER ACCOUNT
    axios.post('/add_user', values)
      .then(res => {
        navigate('/') //redirect to home page after success
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={values.firstName} onChange={(e) => setValues({ ...values, firstName: e.target.value })} required />
        <input type="text" placeholder="Last Name" value={values.lastName} onChange={(e) => setValues({ ...values, lastName: e.target.value })} required />
        <input type="email" placeholder="Email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} required />
        <button type="submit">Signup</button>
      </form>
    </div>

  )
}

export default Signup