import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryItems = (props) => {
    const {_id,name,img,price,quantity,supplier,description}= props.item;
    const navigate =useNavigate()
    console.log(props.item);
    const manageUpdate= id=>{
      navigate(`/inventory/${id}`)
    }
    return (
  
        <div className='col-4 ' style={{backGround:'lightblue'}}>
            <Card style={{ width: '18rem',  }}>
  <Card.Img variant="top" src={img} style={{height:'250px'}} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    {description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem >Price:{price}</ListGroupItem>
    <ListGroupItem>Quantity:{quantity}</ListGroupItem>
    <ListGroupItem>Supplier:{supplier}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button variant="primary" onClick={()=>manageUpdate(_id)}>Manage Update</Button>
  <Button variant="primary" className='ms-2'>Delete</Button>
  </Card.Body>
</Card>
        </div>
   
    );
};

export default InventoryItems;