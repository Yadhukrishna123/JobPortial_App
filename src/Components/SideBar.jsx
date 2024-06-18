import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';


function SideBar() {
  const menuItems = [
    { text: 'Dashboard',  path: '/' },
    { text: 'Users', path: '/users' },
    { text: 'Jobs', path: '/    ' },
    { text: 'Job Category', path: '/' },
  ];
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const toggleDrawer =  (anchor, open) => (event)=>{
        if(event.type ==="keydown" &&(event.key === "tab" || event .key === "shift") ){
            return
        }

        setState({...state, [anchor]: open})
    }

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer( false)}
          onKeyDown={toggleDrawer( false)}
        >
          <List>
           {menuItems.map((item,index)=>(
            <ListItem key={item.text} disablePadding>
            <ListItemButton component = {Link} to={item.path}>
              {/* <ListItemIcon>
                {index % 3 === 0 ? <DashboardIcon /> : <PeopleAltIcon /> }
              </ListItemIcon>
              <ListItemIcon>
                {index % 3 === 0 ? <DashboardIcon /> : <PeopleAltIcon /> }
              </ListItemIcon> */}
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
           ))}
          </List>
          <Divider />
         
        </Box>
      );


  return (
    <div className='sideBar'>
      {/* {(['left', 'right', 'top', 'bottom']  ).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}

      <React.Fragment>
         <MenuIcon sx={{ fontSize: 40 }} onClick={toggleDrawer("left",true)}/>
         <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
      </React.Fragment>
      <img className='imge' src="https://problogger.com/jobs/wp-content/uploads/2019/10/Screen-Shot-2019-10-17-at-4.36.48-pm-1024x518.png" alt="" />
    </div>
  )
}

export default SideBar