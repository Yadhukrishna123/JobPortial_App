import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { Trash3 } from 'react-bootstrap-icons';





function Details() {
  const [details,SetDetails] = useState([])
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])

 const getJobName = (id)=>

  {
    const job = jobs.find(o => o._id==id)
    if(typeof(job) != "undefined"){
         return job.title
    }
    return "unknown"
    }

  const getJobname = async()=>{
    try {
      const res =await axios.get("https://job-portial-backed-14.onrender.com/api/v1/jobs",{
        withCredentials:true,
      })
      setJobs(res.data.jobs)
      console.log(res.data.jobs);
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  
  const getAlldetails = async ()=>{
      try {
        const res = await axios.get("https://job-portial-backed-14.onrender.com/api/v1/allDetails",{
          withCredentials:true
        })
        SetDetails(res.data.details)
      } catch (error) {
        toast.error(error.response.data.message)

        await new Promise((resolve)=> setTimeout(resolve, 2000))
        navigate("/signin")
      }
      }
      useEffect(()=>{

        getAlldetails()
        
        getJobname()
     },[navigate ])
 


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
        <Col className='mt-3'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Job</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>State</th>
          <th>City</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Resume</th>
          
        </tr>
      </thead>
      <tbody>
       
           {details && details.map((data,index)=>(
             <tr  key = {index} >
             <td>{index + 1}</td>
             <td>{getJobName(data.jobId)}</td>
             <td>{data.firstName}</td>
             <td>{data.lastName}</td>
             <td>{data.email}</td>
             <td>{data.state}</td>
             <td>{data.city}</td>
             <td>{data.address}</td>
             <td>{data.phoneNumber}</td>
             <td>{data.resume}</td>
             
             {/* <td><Trash3/></td> */}
             
             
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