import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import auth from './../../../firebse.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import Suppliers from '../Suppliers/Suppliers';


const Home = () => {
    const [user, loading] = useAuthState(auth)
    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }
   else{
    return (
        <div >
            <Banner></Banner>
            <Items></Items>
            <Suppliers></Suppliers>
            
        </div>
    );
   }
};

export default Home;