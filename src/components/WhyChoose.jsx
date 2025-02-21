import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

export default function WhyChoose() {
  return (
    <Box
      data-aos="fade-up"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
        padding: 1,
        marginTop: 4,
        position: "relative",
        zIndex: 2,
      }}
    >
      {[logo1, logo2, logo3].map((logo, index) => (
        <Card
          key={index}
          sx={{
            width: 250,
            height: 250,
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            boxShadow: 3,
            padding: 1,
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "60%",
              margin: "auto",
              objectFit: "contain",
            }}
            image={logo}
            alt={`Card image ${index + 1}`}
          />
          <CardContent
            sx={{
              padding: 0,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {index === 0 && "Compassionate Adoption Process"}
              {index === 1 && "Trusted Network of Pet Lovers"}
              {index === 2 && "Kind To Everyone"}
            </Typography>
            {/* <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
              {index === 0 &&
                "We prioritize matching pets with loving families, making the adoption journey seamless and rewarding."}
              {index === 1 &&
                "Connect with verified shelters and adopters who share your passion for giving pets a better life."}
              {index === 2 &&
                "Every pet deserves to be safe, loved, and respected. Great candidates for adoption shouldn't be deterred by complicated processes."}
            </Typography> */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
