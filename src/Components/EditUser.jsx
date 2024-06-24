import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




function EditUser() {
    const [validated,setValidated]= useState(false)
    const navigate = useNavigate()

    const [user, setUser]= useState({
      firstName:"",
      lastName:"",
      email:"",

    })

    const {id} = useParams("id")
    useEffect(()=>{

    const  getUserDetails = async ()=>{

      try {
        const res = await axios.get(`http://localhost:8080/api/v1/user/${id}`,{
          withCredentials:true
        })
        console.log(res);

        setUser({
          firstName:res.data.user.firstName,
          lastName:res.data.user.lastName,
          email:res.data.user.email
        })
      } catch (error) {
        toast.error(error.message)
      }

    }
    getUserDetails()

  },[id])
  console.log(user);



    const handleSubmit =async (e)=>{
      e.preventDefault()
      const form = e.currentTarget;
      if(form.checkValidity() === false){
      e.stopPropagation()
      setValidated(true)
     }else{
      setValidated(true)

      try {
        
        const res = await axios.put(`http://localhost:8080/api/v1/user/${id}`,{
          firstName:user.firstName,
          lastName:user.lastName,
          email:user.email
        },{
          withCredentials:true
        })

        if(res.data.success){
          toast.success(res.data.message)

          await new Promise((resolve)=>setTimeout(resolve, 1000));
          navigate("/users")             

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
                   <h2 style={{fontWeight:'bold'}}>Update User</h2>
                </div>
            </Col>
            <Row>
                <Col>
                    <div className='signinForm '>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupFullname">
                        <Form.Label style={{fontWeight:'bold'}}>First Name :</Form.Label>
                        <Form.Control type="text" placeholder="First Name" defaultValue={user.firstName} required onKeyUp={(e)=>setUser({...user,fullName:e.target.value})} />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">please entre your first name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Last Name">
                        <Form.Label style={{fontWeight:'bold'}}>Last Name:</Form.Label>
                        <Form.Control  type="text" placeholder="Last Name" defaultValue={user.lastName} required onKeyUp={(e)=>setUser({...user,lastName:e.target.value})} />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">please entr Last Name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                        <Form.Label style={{fontWeight:'bold'}}>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Email" defaultValue={user.email} required onKeyUp={(e)=>setUser({...user,email:e.target.value})} />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
                        </Form.Group>
                        
                        <Button  className="mb-3 border-0  button" variant='success' type="submit">Update</Button>
                    </Form>
                   
              </div>

                </Col>
            </Row>
        </Row>
    </Container>
  )
}

export default EditUser