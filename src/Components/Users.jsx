import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import {PencilSquare, } from "react-bootstrap-icons"
import DeleteUser from './DeleteUser';




function Users() {

    const [users,setUsers] = useState([])
    const navigate = useNavigate()
    

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


    useEffect(()=>{

       getAllUsers()
       
    },[navigate ])


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
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user,index)=>(
            <tr key = {index}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/user/${user._id}`}>
              <PencilSquare style={{color:"red"}}/>
              </Link>
            </td>
            <td>

              <DeleteUser id={user._id } getAllUsers={getAllUsers}/>

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

export default Users