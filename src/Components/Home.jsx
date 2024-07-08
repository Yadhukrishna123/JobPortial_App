import React, { useEffect, useState } from 'react'
import './Style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import  Button  from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import JOb from './JOb';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';





function Home() {

  const [jobs, setJobs] = useState([])
  
  

  useEffect(() => {

    const getAllJobs =async ()=>{

      try {
        const res =await axios.get("https://job-portial-backed-12.onrender.com/api/v1/jobs",{
          withCredentials:true,
        })
        
        setJobs(res.data.jobs)
  
      } catch (error) {
  
               
  
      }
    }

    getAllJobs()
  },[])
  console.log(jobs);

useEffect(()=>{
fetch("http://localhost:8080/api/v1/search")
.then(res => res.json())
.then(data => {
setData(data)
setFilterData(data)
})
.catch(err => console.log(err))
}, [])

const [data, setData] = useState([])
const [filterData, setFilterData] = useState([])
const handleFilter = (e)=>{
const res = filterData.filter(f=>f.title.toLowerCase().includer(e))

}

  return (
    <>
        <div>
        <div fluid>
        <img className='HomeImage' src="https://jooinn.com/images/job-interview.jpg" alt="homeimage" />
        
        
      </div>
    </div>
    <Container >
      <Row>

       {jobs &&(
          jobs.map((job, index)=>(
          
                <Col className='py-3' md={3} key={index}>
                  <JOb detail = {job}/>
            
                </Col>  
                ))
            )}
            
        
        

       
      </Row>
    </Container>
    </>
  )
}

export default Home