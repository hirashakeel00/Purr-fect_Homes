import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material";

const PetCard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const image = location.state?.image || "https://via.placeholder.com/600";
  const name = location.state?.name || "Unknown";

  const petDetails = {
    specialConsiderations: `
      This sweet girl has an open, chronic wound on her left front limb. We are currently managing 
      the wound with bandage changes and pain medications, but due to how long the wound was left untreated 
      and the location, it will likely take several weeks (possibly longer) to heal completely.

      Stella is not adapting well to the shelter environment and exhibiting signs of fear and kennel distress. 
      This animal would benefit from a quieter place to adjust and become more comfortable with social and 
      environmental changes.
    `,
    location: "655 N. Mojave Road Las Vegas, Nevada 89101",
    primaryColor: "Brown",
    size: "MEDIUM",
    weight: "56 lbs",
    dateOfArrival: "12/7/2024",
    age: "Estimated 6Y",
    sex: "Female",
  };

  if (!location.state) {
    return (
      <Box
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#333",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Oops! No pet details are available.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#6C63FF",
            color: "#fff",
            padding: "0.75rem 2rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#574edc",
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "auto",
        marginTop: "2rem",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #F9F9F9 50%, #EFFAFD 100%)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blob Shape */}
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          background: "rgba(92, 184, 92, 0.2)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      ></Box>

      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                width: "100%",
                //  backgroundColor:"red",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Grid>

        {/* Main Info Section */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#538A44",
            }}
          >
            Hi, I’m {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "1rem",
              color: "#555",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            The Animal Foundation Team is getting to know me better. Here's what they have to share so far:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: "1.5rem",
              fontWeight: "bold",
              color: "#538A44",
            }}
          >
            My Special Considerations
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginTop: "1rem",
              color: "#333",
              lineHeight: 1.8,
              fontSize: "0.95rem",
            }}
          >
            {petDetails.specialConsiderations}
          </Typography>
        </Grid>

        {/* Pet Details Section */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              padding: "3rem",
              //borderRadius: "20px",
              //boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            {[{
              label: "Location", value: petDetails.location,
            }, {
              label: "Primary Color", value: petDetails.primaryColor,
            }, {
              label: "Size", value: petDetails.size,
            }, {
              label: "Weight", value: petDetails.weight,
            }, {
              label: "Date of Arrival", value: petDetails.dateOfArrival,
            }, {
              label: "Age", value: petDetails.age,
            }, {
              label: "Sex", value: petDetails.sex,
            }].map((detail, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  fontSize: "0.9rem",
                  color: "#444",
                  marginBottom: "1.5rem",
                  borderBottom:'1.5px solid #d3d3d3',
                }}
              >
                <strong>{detail.label}:</strong> {detail.value}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetCard;
