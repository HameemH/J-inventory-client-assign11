import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from './../../../firebse.init';
import Myitemsitem from './../MyitemsItem/Myitemsitem';


const Myitems = () => {
    const [user] = useAuthState(auth);
    const [items,setItems] = useState([]);
    console.log(items);
    const manageDelete=(id)=>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                }
            })
        }
      }
    useEffect( () => {
        
        const getItems = async () =>{
            const email = user.email;
            const url = `http://localhost:5000/addeditem?vendorEmail=${email}`;
         const {data}=  await axios.get(url)
         setItems(data)
        }
        
        getItems();

    }, [user])
    return (
        <div className='loginPage py-5 '>
           <div className='row container mx-auto'>
           {
                items.map(item=><Myitemsitem key={item._id} item={item} manageDelete={manageDelete}></Myitemsitem>)
            }
           </div>
        </div>
    );
};

export default Myitems;