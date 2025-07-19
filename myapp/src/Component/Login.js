import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const navigate =useNavigate()
   const [user, setuser] = useState([]);
  const [password, setpassword] = useState([]);
 
  
   useEffect(() => {
  if(localStorage.getItem('userId')){
    navigate('/dashboard')
  }
   }, []);
  

  const handleSubmit = (event) =>{
    event.preventDefault();
    
    fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({

        username: user,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
        
      }),
    })
    .then(res => res.json())
  .then((d)=>{
    if(d.message ){
       navigate('/login')

       }else{
        localStorage.setItem('userId',d.id)
        console.log(d.id);
        
          navigate('/dashboard')
       }

  });


    
    }
    
  return (
    <>
    <h1 className='text-center'>login page</h1>
   <div className='row  justify-content-center px-5'>
   <form onSubmit={handleSubmit} className='col-lg-3 col-sm-11 bg-primary text-dark p-3 rounded'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text"  onChange={(e)=>setuser(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password"  onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group form-check">
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
    {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
  </div>
  <button  type="submit" className="btn btn-success w-100">Submit</button>
</form>

   </div>
   </>
  )
}

export default Login