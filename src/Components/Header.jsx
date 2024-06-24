import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import { Link, useNavigate } from 'react-router-dom';
import './Style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { userLogout } from './Redux/UserAuth';
import cookie from "js-cookie"
import MenuIcon from '@mui/icons-material/Menu';





// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'





function Header() {

  const isAuthenticated = useSelector((state)=> state.user.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()



 


  return (
  
      <Navbar className="bg-body-tertiary">
    <Container>
      <img className="navImage" src="https://i1.wp.com/513relief.org/wp-content/uploads/2021/02/Jobs-Icon.png?w=1000&ssl=1" alt="icon" />
      <Navbar.Brand style={{paddingLeft:10,fontSize:30,fontStyle:'oblique'}}as= {Link} to="/">JOB-PORTIAL</Navbar.Brand>
      <Nav.Link style={{paddingLeft:30,fontSize:20}}as ={Link} to="/home">Home</Nav.Link>
      {/* <Nav.Link style={{paddingLeft:30,fontSize:20}}as ={Link} to="/jobdetails">details</Nav.Link> */}
      
      {/* <Nav.Link style={{paddingLeft:30,fontSize:20}}as ={Link} to="/jobs">Jobs</Nav.Link> */}

      
     
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='ms-auto'>
       
        {isAuthenticated ? <>  <Nav.Link style={{paddingLeft:30,fontSize:20}}as ={Link} to="/sidebar"><MenuIcon  sx={{ fontSize: 40 }}/></Nav.Link> </>: <Button className="signinUp" variant="outline-secondary" size="lg" as ={Link} to="./signin">Login</Button> }

       
       
       

        
      
        


      
            
          
        
      
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  

  );
}

export default Header;



           
           
            
           
            
            
            
            
  