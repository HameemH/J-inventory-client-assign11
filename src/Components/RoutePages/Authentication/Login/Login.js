import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className=' loginPage p-2'>
            <div className='loginContainer mt-5'>
            <h1>Log In</h1>
            <form className='d-flex flex-column' >
             <input  type="email" name="" id="" placeholder='Your Email' className='p-2 mt-2 mb-3 rounded-pill border border-0 shadow' required />
             <input type="password" name="" id="" placeholder='Your Password(at least 6 characters)' className='p-2 mt-2 mb-3 rounded-pill border border-0 shadow' required/>
                
             <input type="submit" value="Login"className='btn btn-primary shadow rounded-pill mb-3'/>  
            </form>
            <p>New here ? <Link to="/registration" className='text-primary pe-auto text-decoration-none mt-3'>Please Register</Link> </p>
            <p>Forget Password? <Link to="" className=' text-primary  text-decoration-none' >Reset Password</Link> </p>
             <Button on className='btn btn-primary shadow mt-2 rounded-pill' >Login with google</Button>
            </div>
        </div>
        </div>
    );
};

export default Login;