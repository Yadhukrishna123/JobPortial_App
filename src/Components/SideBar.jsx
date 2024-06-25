import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import cookie from "js-cookie"
import { useDispatch, useSelector } from 'react-redux';
import './SideBar.css'
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { userLogout } from './Redux/UserAuth';


function SideBar() {

  const isAuthenticated = useSelector((state)=> state.user.isAuthenticated)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogout = ()=>{
        dispatch(userLogout())
        cookie.remove("token")
        navigate("/signin")
      }

  return (
    <div className='sideBar'>
        <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="#">
            <DashboardIcon/>
            <span className='d-none d-md-inline'>DashBoard</span>
            </Nav.Link>
            <Nav.Link href="#link"  as ={Link} to="/users">
              <GroupIcon/>
              <span className='d-none d-md-inline'>Users</span>
              </Nav.Link>
            <Nav.Link href="#link" as ={Link} to="/jobs">
           < WorkIcon/>
              <span className='d-none d-md-inline'>Jobs</span>
              </Nav.Link>
              <Nav.Link href="#link" as ={Link} to="/details">
           < WorkIcon/>
              <span className='d-none d-md-inline'>Contact Details</span>
              </Nav.Link>
              
            <Nav.Link href="#link" as ={Link} to="/home">
            <HomeIcon/>
            <span className='d-none d-md-inline'>Home</span>
              </Nav.Link>

              <Nav.Link className='logout' >
            
              {isAuthenticated ? <Button className="signinUp" variant="outline-danger" onClick={handleLogout}><LogoutIcon sx={{ fontSize: 40 }}/></Button> : <Nav.Link href="#pricing"><LogoutIcon sx={{ fontSize: 40 }}/></Nav.Link>}
              </Nav.Link>
            
            </Nav>
            
    </div>
  )
}

export default SideBar