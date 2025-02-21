import React from "react";
import { TextField, Button,Typography, Box } from "@mui/material";
import "../styles/BreedDetect.css";

export default function BreedDetect(){
  return (
    <Box className="signup-container" sx={{mt:4}}>
      <Box className="signup-text-section">
        <Typography variant="h2" className="signup-title">Interested?</Typography>
        <Typography variant="h5" className="signup-subtitle">Click your picture!</Typography>
        <Typography className="signup-description">
and upload to see the results.        
        </Typography>
      </Box>
      <Box className="signup-form-container">
        <h3>To check any pet's breed,</h3>
        <Button className="signup-submit-button" variant="contained" sx={{backgroundColor:'#538A44',mt:8}}>Upload your image</Button>
      </Box>
    </Box>
  );
};
