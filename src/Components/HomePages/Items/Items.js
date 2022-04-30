import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
import Setitems from './../../CustomHooks/ItemsHook/ItemsHook';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Items = () => {
   
const [items, setItems] = Setitems();

    return (
        <div className='itemsBackground p-2'>
            <h1 className='text-white'>Inventory Items</h1>
           <div className='row mx-auto gy-2 container p-5'>
           {
                items.slice(0,6).map(item=><Item key={item._id} item={item}></Item>)
            }
           </div>
           <Button className='button-primary shadow-lg'><Link to='inventory' className='text-decoration-none text-white'>Manage Inventory</Link></Button>
        </div>
    );
};

export default Items;