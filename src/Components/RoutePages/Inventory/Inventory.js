import React from 'react';
import Item from '../../HomePages/Item/Item';
import InventoryItems from '../InventoryItems/InventoryItems';
import Setitems from './../../CustomHooks/ItemsHook/ItemsHook';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Inventory = () => {
    const [items, setItems] = Setitems();
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
                    const remaining = items.filter(user => user._id !== id);
                    setItems(remaining);
                }
            })
        }
      }
    return (
        <div className='loginPage p-2'>
          <div className="row container mx-auto gy-3">
          {
               items.map(item=><InventoryItems key={item._id}  item={item} manageDelete={manageDelete}></InventoryItems>)
           } 
          </div>
          <Button className='button-primary shadow-lg'><Link to='newitem' className='text-decoration-none text-white'>Add new Items</Link></Button>
        </div>
    );
};

export default Inventory;