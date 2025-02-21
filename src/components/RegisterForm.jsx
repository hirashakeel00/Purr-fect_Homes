import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { Email, Lock, Person } from "@mui/icons-material";

export default function RegisterForm() {
  const [checked, setChecked] = useState(false);

  return (
    <Box 
    display='flex' 
    justifyContent='center'
    alignItems='center'
    backgroundColor="#c5e1a5"
    color="#614804"
    padding='40px'
    width='100%'
    marginTop='30px'
    >
    <Box
      sx={{
        width: 400,
        margin: "auto",
        padding: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#F8E5A0",
      }}
    >
      {/* Title */}
      <Typography variant="h5" align="center" fontWeight="bold">
        Register as an Adopter
      </Typography>

      {/* Link for registering as a pet rehoming */}
      <Typography align="center" sx={{ mt: 1 }}>
        Looking to register to rehome your pet?{" "}
        <Link href="#" underline="hover" sx={{ color: "green" , fontWeight: "bold" }}>
          Click here
        </Link>
      </Typography>

      {/* Email Field */}
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <Email /> */}
            </InputAdornment>
          ),
        }}
      />

      {/* Password Field */}
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <Lock /> */}
            </InputAdornment>
          ),
        }}
      />

      {/* First Name & Last Name Fields */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="First Name" variant="outlined" margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            margin="normal"
          />
        </Grid>
      </Grid>

      {/* Terms & Privacy Policy Checkbox */}
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
        label={
          <Typography variant="body2">
            I have read and agree to the{" "}
            <Link href="#" underline="hover" sx={{ color: "green" , fontWeight: "bold" }}>
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" sx={{ color: "green" , fontWeight: "bold" }}>
              Privacy Policy
            </Link>
          </Typography>
        }
        labelPlacement="end" 
        sx={{ mt:1 }}
      />

      {/* Register Button */}
      <Button
      fullWidth
        variant="contained"
        size="large"
        sx={{
            mt:"20px",
          backgroundColor: '#64A651',
          "&:hover": {
            backgroundColor: "#538A44",
          },
        }}
      >
        Register
      </Button>
    </Box>
    </Box>
  );
}
