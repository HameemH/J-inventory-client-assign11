import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebse.init';

const Newitems = () => {
    const [user] = useAuthState(auth)
    const handleNewItem = e=>{
        e.preventDefault();
        const img = e.target.imgUrl.value;
        const name =e.target.name.value;
        const price = e.target.price.value;
        const supplier = e.target.supplier.value;
        const quantity = e.target.quantity.value;
        const vendorEmail = e.target.email.value;
        const description = e.target.description.value;
        const item ={name, price:price, quantity:quantity, supplier,description,img,vendorEmail}
        fetch('https://limitless-beach-92720.herokuapp.com/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('item Added');
            e.target.reset();
         })
      
     
    }
    return (
        <div className='loginPage py-5'>
            <h1 className='text-white'>Add a new item Here</h1>
           <div className='loginContainer  '>
           <form onSubmit={handleNewItem}>
                <input type="url" name="imgUrl" placeholder='Image Url' id="" className='p-2 m-2 rounded-pill border border-0 shadow' />
                <input type="text" name="name" placeholder='Product Name' id="" className='p-2 m-2 rounded-pill border border-0 shadow' />
                <input type="text" name="price" placeholder='Product price' id=""className='p-2 m-2 rounded-pill border border-0 shadow' />
                <input type="text" name="supplier" placeholder='Product Supplier' id=""className='p-2 m-2 rounded-pill border border-0 shadow' />
                <input type="number" name="quantity" placeholder='Product Quantity'className='p-2 m-2 rounded-pill border border-0 shadow' id="" />
                <input type="email" name="email" value={user.email} className='p-2 m-2 rounded-pill border border-0 shadow'id="" disabled />
                <textarea name="description" id="" cols="30" rows="7" className='p-2 m-2 rounded border border-0 shadow' ></textarea>
                <input type="submit" value="Add New Item" className='btn btn-primary shadow shadow-lg rounded-pill'/>
            </form>

           </div>
        </div>
    );
};

export default Newitems;