import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




function EditJob() {

    const[validated,setValidated]=useState(false);
   const navigate = useNavigate()
    const[job, setJob] = useState({
        title:"",
        companyName:"",
        experience:"",
        location:"",
        qualification:"",
        salary:"",

    })
    const {id} = useParams("id")
   
   

    useEffect(()=>{
        
      const  getJobDetails =async ()=>{
            
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/job/${id}`,{
                    withCredentials:true
                })
                console.log(res);
                setJob({
                    title:res.data.job.title,
                    companyName:res.data.job.companyName,
                    experience:res.data.job.experience,
                    location:res.data.job.location,
                    qualification:res.data.job.qualification,
                    salary:res.data.job.salary,
                    

                })
                
              

            } catch (error) {
              toast.error(error.message) 
            }

        }
        getJobDetails()
    },[id])
    console.log(job);
    

    const handleSubmit =async (e)=>{
      e.preventDefault()
      const form = e.currentTarget;
      if(form.checkValidity() === false){
      e.stopPropagation()
      setValidated(true)
     }else{
      setValidated(true)

        try {
          const res = await axios.put(`https://job-portial-backed-9.onrender.com/api/v1/job/${id}`,{
            title:job.title,
            companyName:job.companyName,
            experience:job.experience,
            location:job.location,
            salary:job.salary,
            qualification:job.qualification,
          },{
            withCredentials:true
          })

          if(res.data.success){
            toast.success(res.data.message)
  
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            navigate("/jobs")             
  
        }else{
          toast.error(res.data.message)
        }

        } catch (error) {
          toast.error(error.response.data.message)
        }

     }
    }

 

  return (
    <Container>
        <ToastContainer position="top-right"autoClose={1000}/>
        <Row>
            <Col className='mt-3'>
            <div className=" text-center" >
                   <h2 style={{fontWeight:'bold'}}>Update Job</h2>
            </div>
            </Col>
            <Row>
                <Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupFullname">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Job Name " defaultValue={job.title}  required  onKeyUp={(e)=>setJob({...job,title:e.target.value})} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">entre Job title!</Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" placeholder="company name" defaultValue={job.companyName} required  onKeyUp={(e)=>setJob({...job,companyName:e.target.value})}/>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">  your company!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Experience</Form.Label>
        <Form.Control type="text" placeholder="experience" defaultValue={job.experience} required  onKeyUp={(e)=>setJob({...job,experience:e.target.value})}/>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">  your company!</Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="experiance" defaultValue={job.qualification} required onKeyUp={(e)=>setJob({...job,qualification:e.target.value})} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">experiance!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" defaultValue={job.salary} required onKeyUp={(e)=>setJob({...job,salary:e.target.value})} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre salary!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" defaultValue={job.location} required onKeyUp={(e)=>setJob({...job,location:e.target.value})} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entrelocation!</Form.Control.Feedback>
      </Form.Group>
      
      
      <Button  className="mb-3 border-0" variant='success' type="submit">Update</Button>
    </Form>
                </Col>
            </Row>
        </Row>
    </Container>
  )
}

export default EditJob