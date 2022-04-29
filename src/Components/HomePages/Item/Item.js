import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const Item = (props) => {
    const {name,img,price,quantity,supplier,description}= props.item;
    console.log(name);
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
  <Button variant="primary">Manage Update</Button>
  </Card.Body>
</Card>
        </div>
   
    );
};

export default Item;