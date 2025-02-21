import React from "react";
import LOGO from "../assets/LOGO.png";
import { Box, Typography, Link, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box
    display="flex"
    justifyContent="space-between"
      sx={{
        // backgroundColor: "#757575",
        color: "black", // Dark text color
        padding: "1.5rem",
        // marginTop: "1.5rem",
        fontSize:'0.9rem'
      }}
    >
      <img
                src={LOGO} // Replace with the path to your image
                style={{
                  width: "400px", // Adjust size as needed
                  height: "400px",
                  position:"relative",
                  top:"-8rem",
                  left:"-4rem",
                }}
              />
      <Grid container spacing={4}>
        {/* About Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{color:'Green'}}>
            About Us
          </Typography>
          <Typography variant="body2">
            Purr-fect Homes is dedicated to connecting loving families with pets
            in need of forever homes.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{color:'Green'}}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/adopt" underline="hover" color="inherit">
              Adopt
            </Link>
            <Link href="/donate" underline="hover" color="inherit">
              Donate
            </Link>
            <Link href="/volunteer" underline="hover" color="inherit">
              Volunteer
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact and Legal Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{color:'Green'}}>
            Contact
          </Typography>
          <Typography variant="body2">
            123 Pet Street
            <br />
            Furry City, FC 12345
            <br />
            Email: <Link href="mailto:info@purrfecthomes.com">info@purrfecthomes.com</Link>
            <br />
            Phone: <Link href="tel:1234567890">(123) 456-7890</Link>
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem",color:'Green'}}>
            Legal
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/terms" underline="hover" color="inherit">
              Terms and Conditions
            </Link>
            <Link href="/privacy" underline="hover" color="inherit">
              Privacy Policy
            </Link>
            <Link href="/faq" underline="hover" color="inherit">
              FAQ
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
