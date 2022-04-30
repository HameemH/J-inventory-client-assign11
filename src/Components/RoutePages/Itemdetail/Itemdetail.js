import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Itemdetail = () => {
    const {id} = useParams();
    const [item, setItem] = useState();
    useEffect(()=>{
      fetch(`http://localhost:5000/item/${id}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setItem(data)
      })
    },[])
    return (
        <div className='loginPage'>
            <h1>{item?.name}</h1>
        </div>
    );
};

export default Itemdetail;