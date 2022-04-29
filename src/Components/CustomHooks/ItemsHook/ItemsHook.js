import { useState, useEffect } from 'react';


const Setitems=()=>{
    const [items,setItems] =useState([]);
console.log(items);
useEffect(()=>{
    fetch('http://localhost:5000/item')
    .then(res=>res.json())
    .then(data=>{console.log(data);
    setItems(data)
    })
},[])

return[items,setItems]
}

export default Setitems;