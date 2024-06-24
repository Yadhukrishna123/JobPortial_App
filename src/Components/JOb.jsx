import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

function JOb({detail}) {
  return (
    <Card >
    <Card.Body>
     <Card.Title><h3>{detail.title}</h3></Card.Title>
     </Card.Body>
   <ListGroup className="list-group-flush">
     <ListGroup.Item><h4>{detail.companyName}</h4></ListGroup.Item>
     <ListGroup.Item>Location : {detail.location}</ListGroup.Item>
     <ListGroup.Item><CurrencyRupeeIcon/>{detail.salary}</ListGroup.Item>
   </ListGroup>
   <Card.Body>
   <Button variant="success" as ={Link} to={`/jobdetails/${detail._id}`}>More Details</Button>
    
   </Card.Body>
 </Card>
  )
}

export default JOb