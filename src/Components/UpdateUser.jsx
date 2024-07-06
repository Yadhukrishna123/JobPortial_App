import React from 'react'

function UpdateUser() {
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
}s

export default UpdateUser