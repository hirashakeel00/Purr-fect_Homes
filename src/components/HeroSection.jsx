import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import hero from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        padding: "50px",
        marginBottom:"120px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Left Content */}
      <Box sx={{ maxWidth: "600px", textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold",
            //color: "#4B224D",
            color:"#538A44",
            marginBottom: "20px",
          }}
        >
          Purr-fect Homes: More Than Just an Adoption Site
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          At Purr-fect Homes, we’re more than just a pet adoption service - we’re a team
          of animal lovers dedicated to creating lasting bonds. With years of
          experience in pet care and welfare, we understand the unique
          personalities and needs of each animal in our care.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#4B224D",
            color: "#4B224D",
            padding: "10px 20px",
            fontSize: "1rem",
            textTransform: "none",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#4B224D",
              color: "#fff",
              borderColor: "#4B224D",
            },
          }}
        >
          Learn More About Us &nbsp; →
        </Button>
      </Box>

      {/* Right Image */}
      <Box data-aos="fade-up"
        sx={{
          marginTop: { xs: "30px", md: "0" },
          marginLeft: { md: "50px" },
        }}
      >
        <img
          src={hero}
          alt="Family with a dog"
          style={{
            maxWidth: "100%",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
