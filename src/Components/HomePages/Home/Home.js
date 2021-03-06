import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import auth from './../../../firebse.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import Suppliers from '../Suppliers/Suppliers';
import Newsletter from '../Newsletter/Newsletter';
import Setitems from './../../CustomHooks/ItemsHook/ItemsHook';


const Home = () => {
    const [user, loading] = useAuthState(auth)
    const [items] = Setitems()
    if(loading || items.length === 0){
        return  <Spinner animation="border" variant="primary" />
    }
   else{
    return (
        <div >
            <Banner></Banner>
            <Items></Items>
            <Suppliers></Suppliers>
            <Newsletter></Newsletter>
        </div>
    );
   }
};

export default Home;