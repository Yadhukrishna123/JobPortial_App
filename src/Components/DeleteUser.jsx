import axios from 'axios';
import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function DeleteUser({id, getAllUsers}) {

    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm =async ()=>{

        setShow(false)

       try {
        const res =await axios.delete(`https://job-portial-backed-14.onrender.com/api/v1/user/${id}`,{
            withCredentials:true
        })

        if(res.data.success){
            toast.success(res.data.message)
  
            await new Promise((resolve)=>setTimeout(resolve, 2000));

            getAllUsers()

            navigate("/users")             
  
        }else{
            toast.error(res.data.message)
        }

       } catch (error) {
        toast.error(error.response.data.message)
       }
    }

  return ( 
    <>
     <ToastContainer position="top-right"autoClose={1000}/>
      <Trash   onClick={handleShow}/>  

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure that you want to delete this user!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>  
    </>
    
  )
}

export default DeleteUser