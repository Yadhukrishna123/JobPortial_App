import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Trash } from 'react-bootstrap-icons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Details() {

    const [details, setDetails] = useState([])
    const navigate = useNavigate()

    useState(()=>{

        const getAllJobs =async ()=>{
            try {
                const res =await axios.get("http://localhost:8080/api/v1/allDetails",{
                    withCredentials:true,
                  })
                  
                  setDetails(res.data.details)
                  
            } catch (error) {
                toast.error(error.response.data.message)

                  await new Promise((resolve)=> setTimeout(resolve, 2000))
           
                      navigate("/details")
            }
        }
        getAllJobs()

    },[])


  return (
    <Container>
       <ToastContainer position="top-right"autoClose={1000}/>
      <Row>
           <Col className='mt-3'>
              <div className='text-center'>
                <h2 style={{fontWeight:'bold'}}>Contact Details</h2>
              </div>
            </Col>
      </Row>
     
      <Row>
        <Col>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>State</th>
          <th>City</th>
          <th>Address</th>
          <th>Phonenumber</th>
          <th>Resume</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        
          {details && details.map((details,index)=>(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{details.firstName}</td>
                  <td>{details.lastName}</td>
                  <td>{details.email}</td>
                  <td>{details.state}</td>
                  <td>{details.city}</td>
                  <td>{details.address}</td>
                  <td>{details.phoneNumber}</td>
                  <td>{details.resume}</td>
                  
                  <td>
                    <Trash/>
                  </td>
                  </tr>
          ))}
    
        
        
        
      </tbody>
    </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Details