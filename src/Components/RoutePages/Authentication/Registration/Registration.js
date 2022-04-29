import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Registration = () => {
    return (
        <div>
        <div className='loginPage p-2 '>
        <div className=' loginContainer mt-5'>
        <h1>Welcome</h1>
        <form  className='d-flex flex-column'>
         <input type="text" name="" id="" placeholder='Your Name' className='p-2 m-2 rounded-pill border border-0 shadow' />
         <input type="email" name="" id="" placeholder='Your Email'className='p-2 m-2 rounded-pill border border-0 shadow' required />
         
         <input type="password" name="" id="" placeholder='Your Password(at least 6 characters)'  className='p-2 m-2 rounded-pill border border-0 shadow' required/>
         <input type="password" name="" id="" placeholder='Confirm Password'  className='p-2 m-2 rounded-pill border border-0 shadow' required/>
         
        
          <input type="submit" value="Signup" className='btn btn-primary shadow shadow-lg rounded-pill'/>  
            
        </form>
        
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        <Button className='btn btn-primary shadow mt-2 rounded-pill'>Signup with google</Button> 
    </div>
   </div>
    </div>
    );
};

export default Registration;