import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import LoginDialog from './LoginDialog'; // Import the dialog component
import ListDialog from './ListDialog'; // Import the dialog component
import offlogo from "../assets/offlogo.png";
import { useState } from 'react';

const navLinkStyle = {
  color: '#538A44',
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
  fontSize: '16px',
};

function Header() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);

  const handleLoginClick = () => {
    setOpenLogin(true); // Open the dialog when Login/Register is clicked
  };
  const handleListClick = () => {
    setOpenList(true); // Open the dialog when Login/Register is clicked
  };

  const handleDialogClose = () => {
    setOpenLogin(false);
    setOpenList(false);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white'}}>
        <Toolbar sx={{ height: 50, display: 'flex', justifyContent: 'space-between' }}>
          {/* Left-aligned Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={offlogo} 
              alt="Adopt Icon" 
              style={{ height: 200, marginRight: -60,marginLeft:-90,marginTop:35 }} // Adjust height & spacing
            />
            
            <Typography variant="h4">
              <span id="spanPf" className="oswald-titlespan">Purr-fect</span> 
              <span id="spanHome" className="oswald-titlespan"> Homes</span>
            </Typography>
          </Box>

          {/* Right-aligned Navigation */}
          <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
            <ul
              id="navbar"
              style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0 }}
            >
              <li>
                <Link 
                  to="./HomePage.jsx" 
                  style={navLinkStyle} 
                  onMouseEnter={(e) => (e.target.style.color = '#426F36')}
                  onMouseLeave={(e) => (e.target.style.color = '#538A44')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="./HowToAdopt.jsx" 
                  style={navLinkStyle} 
                  onMouseEnter={(e) => (e.target.style.color = '#426F36')}
                  onMouseLeave={(e) => (e.target.style.color = '#538A44')}
                >
                  Adopt a pet
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  style={navLinkStyle} 
                  onMouseEnter={(e) => (e.target.style.color = '#426F36')}
                  onMouseLeave={(e) => (e.target.style.color = '#538A44')}
                  onClick={handleListClick}
                >
                  List a pet
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  style={navLinkStyle} 
                  onMouseEnter={(e) => (e.target.style.color = '#426F36')}
                  onMouseLeave={(e) => (e.target.style.color = '#538A44')}
                  onClick={handleLoginClick}
                >
                  Login/Register
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Include the dialog component */}
      <LoginDialog open={openLogin} handleClose={handleDialogClose} />
      <ListDialog open={openList} handleClose={handleDialogClose} />
    </Box>
  );
}

export default Header;
