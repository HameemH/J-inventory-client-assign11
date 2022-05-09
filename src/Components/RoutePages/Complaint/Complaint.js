import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Complaint = () => {
 
    return (
        <div className='loginPage py-5'>
         <div className="container">
         <div className='loginContainer w-75'>
                <h2>Give Your Complaint and Feedback Here</h2>
                <form className='d-flex flex-column'>
                <input type="text" name="name" placeholder='Your Name' id="" className='p-2 m-2 rounded-pill border border-0 shadow' />
                <input type="email" name="email" placeholder='Your Email' className='p-2 m-2 rounded-pill border border-0 shadow'id=""  />
                <textarea name="description" id="" cols="30" rows="7" className='p-2 m-2 rounded border border-0 shadow' ></textarea>
                <input type="submit" value="Submit" className='btn btn-primary shadow shadow-lg rounded-pill'/>

                </form>
            </div>
         </div>
        </div>
    );
};

export default Complaint;