import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";

const AboutUs = () => {
  const [showMission, setShowMission] = useState(false);

  return (
    <Container maxWidth="md" style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Purr-fect Homes!
      </Typography>
      <Typography variant="body1" paragraph>
        We connect loving pets with caring owners. Our goal is to make pet adoption easy, safe, and joyful for everyone.
      </Typography>

      <Card variant="outlined" style={{ margin: "20px 0", padding: "10px" }}>
        <CardContent>
          <Typography variant="h6">Why Choose Us?</Typography>
          <Typography variant="body2">
            ✅ Find pets near you <br />
            ✅ Identify breeds with our lens tool <br />
            ✅ Chat instantly with pet owners <br />
            ✅ Safe and verified adoptions
          </Typography>
        </CardContent>
      </Card>

      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setShowMission(!showMission)}
      >
        {showMission ? "Hide" : "Our Mission"}
      </Button>

      {showMission && (
        <Typography variant="body1" style={{ marginTop: "20px" }}>
          Our mission is to ensure every pet finds a loving home. We believe in kindness, trust, and making adoption simple for everyone.
        </Typography>
      )}
    </Container>
  );
};

export default AboutUs;
