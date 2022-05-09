import React from 'react';

const Newsletter = () => {
    return (
        <div className='itemsBackground py-5 '>
            <div className='row'>
                <div className="col-sm-12 col-md-6">
                    <img src="https://i.ibb.co/0cHTkjB/newsletter.jpg" className='w-75 rounded mb-sm-5' alt="" />
                </div>
                <div className="col-sm-12 col-md-6 ">
                    <div className='loginContainer mt-sm-3 w-75'>
                        <h6>For getting tip and tricks to manage a inventory You can subscribe to our newsletter.</h6>
                        <form className='d-flex flex-column'>
                            <input   type="email" name="" id="" placeholder='Your Email' className='p-2 mt-2 mb-3 rounded-pill border border-0 shadow' required />
                        <input type="submit" value="Subscribe"className='btn btn-primary shadow rounded-pill mb-3'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;