import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../../firebse.init';
import { sendEmailVerification } from 'firebase/auth';

const Registration = () => {
    const [email, setEmail] =useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('');
   const [customError, setcustomError] =useState('');
   const [CustomErrorEmail, setCustomErrorEmail] = useState('');
    const [CustomErrorPassword, setCustomErrorPassword] = useState('');
    const navigate = useNavigate()
   const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth ,{ sendEmailVerification: true });

  const handleEmail = e =>{
    const emailvalidation = /\S+@\S+\.\S+/;
    const validEmail = emailvalidation.test(e.target.value);
    if(validEmail){
        setEmail(e.target.value);
        setCustomErrorEmail('')
    }
    else{
        setCustomErrorEmail('Email is not valid')
    }
   
}
const handlePassword =e =>{
    const passwordvalidation = /.{6}/;
    const validPassword = passwordvalidation.test(e.target.value);
    if(validPassword){
        setPassword(e.target.value);
        setCustomErrorPassword('');
    }
    else{
        e.target.reset()
        setCustomErrorPassword('Password should be 6 characters')
       
    }
   
}
const handleConfirmPassword =e =>{
    
        setConfirmPassword(e.target.value); 
}
const handleRegistration = e=>{
    e.preventDefault();
    console.log(email,password)
    if(password === confirmPassword){
        createUserWithEmailAndPassword(email, confirmPassword);
        sendEmailVerification();
        setcustomError('')
    }
   else{
       setcustomError('Password did Not match')
   }
}
if (GoogleUser || user ){
    navigate('/home')
}
    return (
        <div>
        <div className='loginPage py-5 '>
       <div className="container">
       <div className=' loginContainer mt-5 w-75'>
        <h1>Welcome</h1>
        <form  className='d-flex flex-column' onSubmit={handleRegistration}>
         <input type="text" name="" id="" placeholder='Your Name' className='p-2 m-2 rounded-pill border border-0 shadow' />
         <input onChange={handleEmail}  type="email" name="" id="" placeholder='Your Email'className='p-2 m-2 rounded-pill border border-0 shadow' required />
         
         <input  onChange={handlePassword} type="password" name="" id="" placeholder='Your Password(at least 6 characters)'  className='p-2 m-2 rounded-pill border border-0 shadow' required/>
         <input onChange={handleConfirmPassword}  type="password" name="" id="" placeholder='Confirm Password'  className='p-2 m-2 rounded-pill border border-0 shadow' required/>
         
        
          <input type="submit" value="Signup" className='btn btn-primary shadow shadow-lg rounded-pill'/>  
            
        </form>
        <p className='text-danger'>{CustomErrorEmail}</p>
        <p className='text-danger'>{CustomErrorPassword}</p>
        <p className='text-danger'>{customError}</p>
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        <Button className='btn btn-primary shadow mt-2 rounded-pill' onClick={() => signInWithGoogle()}>Signup with google</Button> 
        </div>
       </div>
   </div>
    </div>
    );
};

export default Registration;