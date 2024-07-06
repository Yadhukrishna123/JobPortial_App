import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';
import {userAuthSuccess} from "./Redux/UserAuth"
import { useDispatch } from 'react-redux';
import './Style.css'






function Signin() {
    const [validated,setValidated]= useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

   const  handleSubmit =async (e) =>{
    e.preventDefault()
    const form = e.currentTarget;
    if(form.checkValidity() === false){
        e.stopPropagation()
        setValidated(true)
       }else{
        setValidated(true)
        try {
            let res  =await axios.post("http://localhost:8080/api/v1/signin",{
                email:email,
                password:password
            },{
                withCredentials:true
            })
            console.log(res);
            if(res.data.success){

                if(res.data.isAuthenticated){
                    dispatch(userAuthSuccess({user:res.data.user, isAuthenticated:res.data.isAuthenticated,token:res.data.token}))

                toast.success(res.data.message)

                await new Promise((resolve)=>setTimeout(resolve, 1000));

                navigate("/home") 
                
                }else{
                    toast.error(res.data.message)
                }
                
                
            }else{
                toast.error(res.data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
       
       }
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
            <h2 style={{fontWeight:'bold'}}>LOG IN</h2>
        </div>
        </Col>
        <Row>
            <Col>
            <div className='signinForm '>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                       <Button  className="mb-3 border-0" variant='success' type="submit">Login</Button>
                       <Form.Group className="mb-3" controlId="Email">
                        <h5 style={{color:"gray",marginLeft:420,marginBottom:50}}>or</h5>
                       <div className='md-3'>
                       <Button variant="primary" size="lg" style={{marginLeft:380}} className="mb-3"  as ={Link} to="/register">
                           Sign Up
                        </Button>
                       </div>
                      </Form.Group>
                       </Form>
                          
                
                </div>
                
                   
                
            </Col>
                
           
        </Row>
    </Row>
</Container>
  )
}

export default Signin