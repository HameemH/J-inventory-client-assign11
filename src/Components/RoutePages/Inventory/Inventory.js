import React from 'react';
import Item from '../../HomePages/Item/Item';
import InventoryItems from '../InventoryItems/InventoryItems';
import Setitems from './../../CustomHooks/ItemsHook/ItemsHook';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Inventory = () => {
    const [items, setItems] = Setitems();
    return (
        <div className='loginPage p-2'>
          <div className="row container mx-auto gy-3">
          {
               items.map(item=><InventoryItems key={item._id}  item={item}></InventoryItems>)
           } 
          </div>
          <Button className='button-primary shadow-lg'><Link to='newitem' className='text-decoration-none text-white'>Add new Items</Link></Button>
        </div>
    );
};

export default Inventory;