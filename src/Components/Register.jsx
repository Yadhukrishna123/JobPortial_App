import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






function Register() {
const [validated,setValidated]= useState(false)
const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const  handleSubmit =async (e) =>{
        e.preventDefault()
        const form = e.currentTarget;
        if(form.checkValidity() === false){
        e.stopPropagation()
        setValidated(true)
       }else{
        try {
            let res = await axios.post("https://job-portial-backed-11.onrender.com/api/v1/signup",{
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password
        
            })
            if(res.data.success){
                toast.success(res.data.message)

                await new Promise((resolve)=>setTimeout(resolve, 1000));
                navigate("/")             

            }else{
                toast.error(res.data.message)
            }
            console.log(res);
           } catch (error) {
            console.log(error.message);
           }
        setValidated(true)
       }
    
  
    
}
const handleFirstName = (e) =>{
    setFirstName(e.target.value)
    console.log(firstName);
}
const handleLastName = (e) =>{
    setLastName(e.target.value)
    console.log(lastName);
}
const handleEmail= (e) =>{
    setEmail(e.target.value)
    console.log(email);
}
const handlePassword = (e) =>{
    setPassword(e.target.value)
    console.log(password);
}






  return (
    <Container>
    <ToastContainer position="top-right"autoClose={1000}/>
        <Row>
            <Col className='mt-3'>
              
              <div className=" text-center" >
                   <h2 style={{fontWeight:'bold'}}>SIGN IN</h2>
                </div>
            </Col>
            <Row>
                <Col>
                    <div className='signinForm '>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupFullname">
                        <Form.Label style={{fontWeight:'bold'}}>First Name :</Form.Label>
                        <Form.Control type="text" placeholder="First Name" required onKeyUp={handleFirstName} />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">please entre your full name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Last Name">
                        <Form.Label style={{fontWeight:'bold'}}>Last Name:</Form.Label>
                        <Form.Control  type="text" placeholder="Last Name" required onKeyUp={handleLastName} />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">please entreLast Name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                        <Form.Label style={{fontWeight:'bold'}}>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Email" required onKeyUp={handleEmail} />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label style={{fontWeight:'bold'}}>Password:</Form.Label>
                        <Form.Control type="password" placeholder="" required onKeyUp={handlePassword} />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">please entre your password!</Form.Control.Feedback>
                        </Form.Group>
                        <Button  className="mb-3 border-0  button" variant='success' type="submit">Register</Button>
                    </Form>
                   
              </div>

                </Col>
            </Row>
        </Row>
    </Container>
  )
}

export default Register