import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {PencilSquare, } from "react-bootstrap-icons"
import DeleteJob from './DeleteJob';





function Jobs() {


  const [jobs, setJobs] = useState([])
  const navigate = useNavigate()

  const getAllJobs =async ()=>{

    try {
      const res =await axios.get("https://job-portial-backed-14.onrender.com/api/v1/jobs",{
        withCredentials:true,
      })
      
      setJobs(res.data.jobs)

    } catch (error) {

      toast.error(error.response.data.message)

       await new Promise((resolve)=> setTimeout(resolve, 2000))

           navigate("/jobs")

    }
  }

  useEffect(()=>{

   
    getAllJobs()
    
  },[navigate])
  

  return (
    <Container>
       <ToastContainer position="top-right"autoClose={1000}/>
      <Row>
           <Col className='mt-3'>
              <div className='text-center'>
                <h2 style={{fontWeight:'bold'}}>Jobs</h2>
              </div>
            </Col>
      </Row>
      <Row>
        <Col>
        
      <div className="mb-2">
       
        <Button variant="primary" size="lg" as ={Link} to="/addJob">
          Add Job
        </Button>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>CompanyNAme</th>
          <th>Experiance</th>
          <th>Qualification</th>
          <th>Salary</th>
          <th>Location</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {jobs && jobs.map((job,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{job.title}</td>
          <td>{job.companyName}</td>
          <td>{job.experience}</td>
          <td>{job.qualification}</td>
          <td>{job.salary}</td>
          <td>{job.location}</td>
          <td>
              <Link to={`/job/${job._id}`}>
              <PencilSquare style={{color:"red"}}/>
              </Link>
          </td>
          <td>
            <DeleteJob  id={job._id} getAllJobs={getAllJobs}/>
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

export default Jobs