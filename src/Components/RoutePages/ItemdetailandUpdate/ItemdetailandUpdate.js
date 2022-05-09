import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ItemdetailandUpdate = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
  
    
    useEffect(()=>{
      fetch(`https://limitless-beach-92720.herokuapp.com/item/${id}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setItem(data)
      })
    },[]);


    const handleDelivery=() =>{
       const newquantity = parseInt(item.quantity) -1
       console.log(newquantity);
     
        const newitem ={quantity: newquantity}
      if(newquantity>=0){
        fetch(`https://limitless-beach-92720.herokuapp.com/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newitem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('item delivered');
            window.location.reload()
        })
      }
     
    }
    const updateRestock=e =>{
        e.preventDefault();
        const newquantity = e.target.quantity.value;
        console.log(newquantity);
        const newitem ={quantity:newquantity}
        fetch(`https://limitless-beach-92720.herokuapp.com/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newitem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('item restocked');
            e.target.reset();
            window.location.reload()
        })

    }
    
    return (
        <div className='loginPage py-5'>
            <div className="row container">
                <div className="col-md-6 col-sm-12">
                    <div className='loginContainer mt-3  w-75'>
                        <h2>Product Details</h2>
                        <p className='text-danger'>{(item.quantity==0)? 'Item Sold Out': null}</p>
                        <img src={item?.img} className='w-50' alt="" />
                        <h4>Product name:{item?.name}</h4>
                        <p>{item?.description}</p>
                        <h4>Price:{item?.price}</h4>
                        <h4>Quantity:{item?.quantity}</h4>
                        <h4>Supplied By:{item?.supplier}</h4>
                        <Button className='mt-2' onClick={handleDelivery}>Delivered</Button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='loginContainer mt-2 w-75'>
                        <h2>Restock your Item</h2>
                        
                    <form className='d-flex flex-column' onSubmit={updateRestock}>
                    <input type="text" name='quantity' className='p-2 m-2 rounded-pill border border-0 shadow' />
                     <input type="submit" value="Restock" className='btn btn-primary shadow shadow-lg rounded-pill'/> 
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemdetailandUpdate;