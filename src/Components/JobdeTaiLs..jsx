import React, { useEffect, useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function JobdeTaiLs() {

  const {id} = useParams("id")
  const [job, setJob] = useState({
    title:"",
    description:"",
    companyName:"",
    experience:"",
    location:"",
    qualification:"",
    salary:"",

  })
   
  useEffect(()=>{

    const getDetails =async ()=>{
         try {
           const res = await axios.get(`https://job-portial-backed-9.onrender.com/api/v1/job/${id}`,{
             withCredentials:true
           })
           setJob({
            title:res.data.job.title,
            description:res.data.job.description,
            companyName:res.data.job.companyName,
            experience:res.data.job.experience,
            location:res.data.job.location,
            qualification:res.data.job.qualification,
            salary:res.data.job.salary,
           })
           console.log(res);
         } catch (error) {
          toast.error(error.message) 
         }
     }
     getDetails()
   },[])
 
console.log(job);

  return (
    <Container>
        
       
    <Row>

   
        <Col> 
    <Card>
<Card.Header><h1>{job.title}</h1></Card.Header>
<Card.Body>
<Card.Text>
{job.description}
</Card.Text>
<Card.Title>{job.companyName}</Card.Title>
<Card.Text>
Experiance: {job.experience}
</Card.Text>
 <Card.Text>
 Qualification: {job.qualification}
</Card.Text>
 <Card.Text>
 <CurrencyRupeeIcon/>{job.salary}
</Card.Text>
 <Card.Text>
 Location: {job.location}
</Card.Text>
<Button variant="primary"  as ={Link} to={`/contactDetails/${job._id}`} >Upply</Button>
</Card.Body>
</Card>
    </Col>
     
        
    
    
</Row>




</Container>
  )
}

export default JobdeTaiLs