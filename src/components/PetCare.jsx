import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import care1 from "../assets/care1.png";
import care2 from "../assets/care2.jpg";
import care3 from "../assets/care3.png";
import care4 from "../assets/care4.jpeg";
import bg1 from "../assets/bg1.png"; // Replace with your background image path

export default function PetCare() {
  return (
    <Box sx={{ position: "relative", py: 8, overflow: "hidden" }}>
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: "-350px", // Adjust to change the vertical position
          right: "-350px", // Adjust to change the horizontal position
          width: "100%",
          height: "100%",
          transform: "rotate(-20deg)",
          backgroundImage: `url(${bg1})`, // Background image
          backgroundSize: "1200px 1200px", // Ensures the image covers the entire background
          //backgroundPosition: "center", // Centers the image
          //backgroundRepeat: "no-repeat", // Prevents repetition
          zIndex: 2, // Places the background behind other elements
        }}
      />

      {/* Content Section */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Header Section */}
        <Typography
          data-aos="fade-in"
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#538A44", fontSize: "2.5rem", lineHeight: "1.2" }}
        >
          Every Paw Deserves
        </Typography>
        <Typography
          data-aos="fade-in"
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 4, color: "#538A44", fontSize: "2.5rem", lineHeight: "1.2" }}
        >
          a Loving Home!
        </Typography>

        {/* Icons Section */}
        <Stack
          data-aos="fade-in"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ mb: 4 }}
        >
          <Stack
            direction="column"
            alignItems="center"
            sx={{ color: "#538A44" }}
            borderRadius="6px"
            padding="5px"
            border="1.5px solid green"
          >
            <Typography variant="body1" sx={{ mt: 1 }}>
              Bath or Shower
            </Typography>
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            sx={{ color: "#538A44" }}
            borderRadius="6px"
            padding="2px"
            border="1.5px solid green"
          >
            <Typography variant="body1" sx={{ mt: 1 }}>
              Hands-On Pet Assessment
            </Typography>
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            sx={{ color: "#538A44" }}
            borderRadius="6px"
            padding="5px"
            border="1.5px solid green"
          >
            <Typography variant="body1" sx={{ mt: 1 }}>
              Safe Drying
            </Typography>
          </Stack>
        </Stack>

        {/* Button */}
        <Button
          data-aos="zoom-in"
          variant="contained"
          sx={{
            backgroundColor: "#64A651",
            "&:hover": {
              backgroundColor: "#538A44",
            },
          }}
        >
          Register Yourself
        </Button>

        {/* Images Section */}
        <Grid container spacing={1} justifyContent="center" sx={{ mt: 5,mb:10 }}>
          {[care1, care2, care3, care4].map((image, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="img"
                src={image}
                alt={`Pet Care ${index + 1}`}
                sx={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
