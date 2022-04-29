import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';


const Items = () => {
   
const [items,setItems] =useState([]);
console.log(items);
useEffect(()=>{
    fetch('items.json')
    .then(res=>res.json())
    .then(data=>{console.log(data);
    setItems(data)
    })
},[])
    return (
        <div className='itemsBackground p-2'>
            <h1 className='text-white'>Inventory Items</h1>
           <div className='row mx-auto gy-2 container p-5'>
           {
                items.map(item=><Item item={item}></Item>)
            }
           </div>
        </div>
    );
};

export default Items;