import React, { useState } from "react";
import { TextField, Button, Typography, Box, Link, IconButton, InputAdornment } from "@mui/material";
import { AccountCircle, Lock, Visibility, VisibilityOff, Login } from "@mui/icons-material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

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
        marginTop: 5,
        padding: 4,
        border: "1px solid #ccc",
        backgroundColor:'#F8E5A0',
        borderRadius:2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" align="center" fontWeight="bold">
        Login Yourself
      </Typography>

      {/* Email Input Field */}
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          sx: { fontSize: "1.2rem" } // Adjust the font size
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <AccountCircle /> */}
            </InputAdornment>
          ),
        }}
      />

      {/* Password Input Field with Visibility Toggle */}
      <TextField
        fullWidth
        label="Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          sx: { fontSize: "1.2rem" } // Adjust the font size
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            </InputAdornment>
          ),
          // endAdornment: (
          //   <InputAdornment position="end">
          //     <IconButton onClick={handleTogglePassword} edge="end">
          //       {showPassword ? <VisibilityOff /> : <Visibility />}
          //     </IconButton>
          //   </InputAdornment>
          // ),
        }}
      />

      {/* Login Button */}
      <Button
        fullWidth
        variant="contained"
        color="success"
        startIcon={<Login />}
        sx={{ mt: 2 }}
      >
        Login
      </Button>

      {/* Lost Password Link */}
      <Link
        href="#"
        underline="hover"
        sx={{ display: "block", textAlign: "center", mt: 1, color: "#555" }}
      >
        Forget your password?
      </Link>

      {/* Register Section */}
      <Typography
        variant="body1"
        sx={{ textAlign: "center", mt: 2, color: "text.secondary" }}
      >
        Don&apos;t have an account?{" "}
        <Link href="#" underline="hover" sx={{ color: "green" }}>
          Register
        </Link>
      </Typography>
    </Box>
    </Box>
  );
}
