import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
import Setitems from './../../CustomHooks/ItemsHook/ItemsHook';
import { Button } from 'react-bootstrap';


const Items = () => {
   
const [items, setItems] = Setitems();

    return (
        <div className='itemsBackground p-2'>
            <h1 className='text-white'>Inventory Items</h1>
           <div className='row mx-auto gy-2 container p-5'>
           {
                items.slice(0,6).map(item=><Item item={item}></Item>)
            }
           </div>
           <Button></Button>
        </div>
    );
};

export default Items;