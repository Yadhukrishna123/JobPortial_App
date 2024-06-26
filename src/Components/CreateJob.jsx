import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




function CreateJob() {
    const[validated,setValidate]=useState(false);
    const[title,settitle]=useState("");
    const[description,setDescription]=useState("");
    const[companyName,setCompanyName]=useState("");
    const[experience, setExperiance] = useState("")
    const[qualification,setQualification]=useState("");
    const[salary,setSalary]=useState("");
    const[location,setLocation]=useState("");
    const navigate = useNavigate()

    
    const handleSubmit =async (event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        if(form.checkValidity()=== false){
            event.stopPropagation();
            setValidate(true);
        }else{
            setValidate(true);

            try {
                let res= await axios.post("https://job-portial-backed-11.onrender.com/api/v1/postJob",{
                    title:title,
                    description:description,
                    companyName:companyName,
                    experience:experience,
                    qualification:qualification,
                    salary:salary,
                    location:location
                })
                console.log(res);
                 if(res.data.success){
                    toast.success(res.data.message)
                 }else{
                    toast.success(res.data.message)
                 }
                 await new Promise((resolve) => setTimeout(resolve, 2000));
                 navigate("/home")
            } catch (error) {
                console.log(error.message);
            }
        }
        setValidate(true);
    }



  const handleTitle = (e)=>{
    console.log(title);
    settitle(e.target.value )
  }
  const handleCompanyName = (e)=>{                      
    console.log(companyName);
    setCompanyName(e.target.value )
  }
  const  handleDescription  = (e)=>{
    console.log(description);
    setDescription(e.target.value ) 
  }
  const  handleExperiance  = (e)=>{
    console.log(experience);
    setExperiance(e.target.value ) 
  }
  
  const  handleQualification = (e)=>{
    console.log(qualification);
    setQualification(e.target.value )
  }
  const  handleSalary = (e)=>{
    console.log(salary);
    setSalary(e.target.value )
  }
  const  handleLocation = (e)=>{
    console.log(location);
    setLocation(e.target.value )
  }

  return (
    <Container>
        <ToastContainer position="top-right"autoClose={1000}/>
        <Row>
            <Col className='mt-3'>
            <div className=" text-center" >
                   <h2 style={{fontWeight:'bold'}}>Add Job</h2>
            </div>
            </Col>
            <Row>
                <Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupFullname">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Job Name "   required onKeyUp={handleTitle} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">entre Job title!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description"  required onKeyUp={handleDescription}  />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" placeholder="company name" required onKeyUp={handleCompanyName}/>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">  your company!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Experience</Form.Label>
        <Form.Control type="text" placeholder="experience" required onKeyUp={handleExperiance}/>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">  your company!</Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="experiance" required onKeyUp={handleQualification} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">experiance!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter Salary"required onKeyUp={handleSalary} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre salary!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" required onKeyUp={handleLocation} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entrelocation!</Form.Control.Feedback>
      </Form.Group>
      
      
      <Button  className="mb-3 border-0" variant='success' type="submit">Submit</Button>
    </Form>
                </Col>
            </Row>
        </Row>
    </Container>
  )
}

export default CreateJob