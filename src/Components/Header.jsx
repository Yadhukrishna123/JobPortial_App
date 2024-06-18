import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'





function TextLinkExample() {
  return (
  
      <Navbar className="bg-body-tertiary">
    <Container>
      <img className="navImage" src="https://i1.wp.com/513relief.org/wp-content/uploads/2021/02/Jobs-Icon.png?w=1000&ssl=1" alt="icon" />
      <Navbar.Brand style={{paddingLeft:10,fontSize:30,fontStyle:'oblique'}}as= {Link} to="/">JOB-PORTIAL</Navbar.Brand>
      <Nav.Link style={{paddingLeft:30,fontSize:20}}as ={Link} to="/home">Home</Nav.Link>
      <Nav.Link style={{paddingLeft:30,fontSize:20}}as ={Link} to="/jobs">Jobs</Nav.Link>
      {/* <Nav.Link style={{paddingLeft:30,fontSize:20}}as ={Link} to="./users">Users</Nav.Link> */}
     
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        <div className="mb-2">
        {/* <Button className="signinUp" variant="outline-secondary" size="lg" as ={Link} to="./signin">Login</Button>{' '}
        <Button className="signinUp" variant="danger" size="lg"as ={Link} to="./register" >Register</Button>{' '} */}

        <Dropdown as={NavItem}>
      
        <Dropdown.Toggle as={NavLink}><AccountCircleIcon sx={{ fontSize: 40 }}/> </Dropdown.Toggle>
      
      <Dropdown.Menu>
        <Dropdown.Item as ={Link} to="./sidebar">Dashboard</Dropdown.Item>
        <Dropdown.Item as ={Link} to="./signin">Login</Dropdown.Item>
        <Dropdown.Item as ={Link} to="./register">Register</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


      
            {/* < AccountCircleIcon  sx={{ fontSize: 55, }}/> */}
          
        
      </div> 
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  

  );
}

export default TextLinkExample;



           
           
            
           
            
            
            
            
  