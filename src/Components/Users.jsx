import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




function Users() {

    const [users,setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{

        const getAllUsers =async ()=>{
            

            try {
              const res = await axios.get("http://localhost:8080/api/v1/users",{
                withCredentials:true,
              })

             setUsers(res.data.users)
            } catch (error) {
                toast.error(error.response.data.message)

                 await new Promise((resolve)=> setTimeout(resolve, 2000))
                 navigate("/signin")
                 
                 
            }
        }


        getAllUsers()
    },[])


  return (
    <Container>
         <ToastContainer position="top-right"autoClose={1000}/>
        <Row>
            <Col className='mt-3'>
                <div className='text-center'>
                <h2 style={{fontWeight:'bold'}}>Users</h2>
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
          
        </tr>
      </thead>
      <tbody>
        {users && users.map((user,index)=>(
            <tr key = {index}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        
      </tbody>
    </Table>
            </Col>
        </Row>
    </Container>
  )
}

export default Users