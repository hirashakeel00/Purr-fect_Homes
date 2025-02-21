import * as React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function FeaturedPets() {
  // Define the images and pet names
  const featuredPets = [
    { image: feature1, name: "Marko" },
    { image: feature2, name: "Peanut" },
    { image: feature3, name: "Cloud" },
    { image: feature4, name: "Yellow" },
  ];

  return (
    <Box
      data-aos="fade-up"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        padding: 1,
        marginTop: 3,
        position: "relative",
        zIndex: 1,
        flexWrap: "wrap",
      }}
    >
      {featuredPets.map((pet, index) => (
        <Link
          to={`/pet/${index + 1}`}
          key={index}
          style={{ textDecoration: "none" }}
          state={{ image: pet.image,name:pet.name }} // Pass the pet image via state 
        >
          <Card
  sx={{
    maxWidth: 250,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      backgroundColor:"#F1FFBF",
    },
  }}
>
  <CardMedia
    sx={{
      height: 200,
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "rotate(10deg)", // Slight rotation
      },
    }}
    image={pet.image}
    title={`Pet ${index + 1}`}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {pet.name}
    </Typography>
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
      beatae corporis ve.
    </Typography>
  </CardContent>
  <Box sx={{ display: "flex", justifyContent: "space-between",backgroundColor:'#74C25F' }}>
    <CardActions>
      <IconButton aria-label="location">
        <LocationOnIcon fontSize="small" /> Location
      </IconButton>
    </CardActions>
    <CardActions>
      <IconButton aria-label="favorite">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  </Box>
</Card>

        </Link>
      ))}
    </Box>
  );
}
