import React  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 



function JobDetails() {
  


 

  return (
    <Container>
        
       
                <Row>
            
               
                    <Col> 
                <Card>
          <Card.Header><h1>title</h1></Card.Header>
          <Card.Body>
          <Card.Text>
          description
            </Card.Text>
            <Card.Title>companyName</Card.Title>
            <Card.Text>
            experience
            </Card.Text>
             <Card.Text>
            qualification
            </Card.Text>
             <Card.Text>
             salary
            </Card.Text>
             <Card.Text>
             .location
            </Card.Text>
            <Button variant="primary" >Upply</Button>
          </Card.Body>
        </Card>
                </Col>
                 
                    
                
                
            </Row>
            
        
           
        
    </Container>
  )
}

export default JobDetails