import Reac,{useState} from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../../firebse.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [CustomErrorEmail, setCustomErrorEmail] = useState('');
    const [CustomErrorPassword, setCustomErrorPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, Error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

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
            setCustomErrorPassword('Password should be 6 characters')
        }
    }
    const handleLogin = e=>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const passwordresetemail = email;
        console.log(passwordresetemail);

        if (passwordresetemail) {
            await sendPasswordResetEmail(email);
            toast('email sent');
        }
        else{
            toast('please enter your email address');
        }
    }
    if (GoogleUser || user ){
        navigate(from, {replace: true});
    }
    return (
        <div>
            <div className=' loginPage py-5'>
            <div className='loginContainer mt-5'>
            <h1>Log In</h1>
            <form className='d-flex flex-column' onSubmit={handleLogin}  >
             <input onChange={handleEmail}   type="email" name="" id="" placeholder='Your Email' className='p-2 mt-2 mb-3 rounded-pill border border-0 shadow' required />
             <input  onChange={handlePassword} type="password" name="" id="" placeholder='Your Password(at least 6 characters)' className='p-2 mt-2 mb-3 rounded-pill border border-0 shadow' required/>
                
             <input type="submit" value="Login"className='btn btn-primary shadow rounded-pill mb-3'/>  
            </form>
            <p className='text-danger'>{CustomErrorEmail}</p>
            <p className='text-danger'>{CustomErrorPassword}</p>
            <p className='text-danger'>{Error?.message}</p>
            <p>New here ? <Link to="/registration" className='text-primary pe-auto text-decoration-none mt-3'>Please Register</Link> </p>
            <p>Forget Password? <Link to="" className=' text-primary  text-decoration-none' onClick={resetPassword} >Reset Password</Link> </p>
             <Button on className='btn btn-primary shadow mt-2 rounded-pill' onClick={() => signInWithGoogle()} >Login with google</Button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default Login;