import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Box, Typography } from "@mui/material";
import dog from "../assets/dog.webp";
import animal from "../assets/animal.jpg";
import blob4 from "../assets/blob4.png";
import { Link } from 'react-router-dom';

export default function Banner() {
  const items = [
    { image: animal },
    { image: dog },
  ];

  return (
    <Box sx={{ width: "100%", height: "620px", overflow: "hidden" }}>
      {/* Blob */}
      {/* <div
        style={{
          position: "absolute",
          top: "200px", // Adjusted to overlay the Breed Detection section
          left: "50px", // Adjust as needed for alignment
          backgroundColor: "rgba(185, 142, 48, 0.5)",
          width: "500px", // Increased to cover the bottom of the banner
          height: "650px", // Increased to exceed the bottom of the banner
          borderRadius: "90% 60% 50% 90%",
          transform: "rotate(-225deg)", // Rotate only the blob
          zIndex: 2, // Ensure it overlays both sections
        }}
      >
      <p style={{
        transform: "rotate(225deg) scaleX(1) scaleY(1)",
        color:"white",
        fontSize: "2.8rem",
        fontWeight:"500",
        }}>
          Your destination <br/>
          has arrived
      </p>

        <img
          src={blob4} // Replace with the path to your image
          style={{
            width: "400px", // Adjust size as needed
            height: "400px",
            position: "absolute", // Positioning as per your layout
            top: "250px", // Adjust top position
            left: "10%", // Center horizontally
            transform: "rotate(225deg) scaleX(1) scaleY(1)", // Undo rotation and ensure no flipping
            background: "transparent", // Keep background transparent
            objectFit: "contain", // Ensure proper scaling
          }}
        />
      </div> */}

      {/* Carousel */}
      <Carousel indicators={true} autoPlay={true} interval={4000}>
        {items.map((item, index) => (
          <Box
            data-aos="fade-in"
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "600px",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "contain", // Adjusted to make the image fully cover the container
              backgroundRepeat: "no-repeat",
              backgroundPosition:"fit",
              zIndex: 1, // Lower than the yellow shape
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(185, 142, 48, 0.5)",
                pt: 5,
                pb: 3,
                pl: 6,
                pr: 6,
                mt: 5,
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius:"48% 32% 35% 55% / 29% 48% 44% 28% ",
                //clipPath: "polygon(20% 0%, 80% 0%, 100% 25%, 90% 50%, 100% 75%, 80% 100%, 20% 100%, 0% 75%, 10% 50%, 0% 25%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                zIndex: 3, // Higher than both image and yellow shape
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  fontSize: "3.4rem",
                  color:"rgba(10, 10, 10, 0.62)",
                }}
              >
                Welcome <br />
                to Our <br />
                Pet Homes
              </Typography>
              <Link to="/AboutUs.jsx">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#64A651",
                  "&:hover": { backgroundColor: "#538A44" },
                }}
              >
                Explore
              </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
