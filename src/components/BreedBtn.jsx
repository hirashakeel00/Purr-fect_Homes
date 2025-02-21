import * as React from 'react';
import Box from '@mui/material/Box';
import { lightGreen } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function BoxBasic() {
  return (
    <Box sx={{ p: 3,backgroundColor:lightGreen[200],mt:0,
              display:'flex', 
             flexDirection:'column',
             alignItems: 'center',
             position:"relative",
             zIndex:1
             }}>
      <p id="lensDText" data-aos="fade-in">To identify your pet's breed</p>
      <Link to="/BreedDetect.jsx" style={{ textDecoration: 'none' }}>
      <Button  data-aos="zoom-in" variant='contained' sx={{backgroundColor:'#64A651',
                                       "&:hover": {
                                        backgroundColor: "#538A44", // Background color on hover
                                        },}}>Click Here
      </Button>
      </Link>
    </Box>
  );
}
