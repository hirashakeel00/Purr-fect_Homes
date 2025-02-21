import React from "react";
import { Box, TextField, MenuItem, IconButton, Button } from "@mui/material";
import { Search, MoreVert, LocationOn } from "@mui/icons-material";
import FeaturedPets from "./FeaturedPets";

export default function HowToAdopt() {
  return (
    <Box>
    <Box id="outer"
     margin='0 3rem'
     borderRadius='1rem'
      sx={{
        display: "flex",
        // flexWrap: "wrap",
        alignItems:'center',
        justifyContent: "center",
        flexDirection:'column',
        p: 7,
        mt:4,
        backgroundColor: "#dcedc8",
        gap: 3,
      }}
    >
      <Box id="inner1" sx={{display:'flex',
                justifyContent:'center',
                gap:5,
                
      }}>
      {/* Animal Type Dropdown */}
      <TextField
        select
        defaultValue="All"
        variant="outlined"
        size="small"
        helperText="Select animal type"
        FormHelperTextProps={{
          sx: { fontSize: "14px", color: "#33691e" }, // Adjust font size and color
        }}
        sx={{ minWidth: "120px" }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Dogs">Dogs</MenuItem>
        <MenuItem value="Cats">Cats</MenuItem>
        <MenuItem value="Birds">Birds</MenuItem>
        <MenuItem value="Birds">Rabbits</MenuItem>
        {/* Add more options as needed */}
      </TextField>

      {/* Location Input */}
      
        <TextField
          placeholder="Nationwide... or start typing"
          variant="outlined"
          size="small"
          helperText="Select location"
          FormHelperTextProps={{
            sx: { fontSize: "14px", color: "#33691e" }, // Adjust font size and color
          }}
          sx={{ minWidth: "300px" }}
        />
      
      <TextField
          placeholder="All breeds"
          variant="outlined"
          size="small"
          helperText="Select breed"
          FormHelperTextProps={{
            sx: { fontSize: "14px", color: "#33691e" }, // Adjust font size and color
          }}
          sx={{ minWidth: "300px"}}
        />
      </Box>
      {/* More Filters Button */}
      {/* <Button
        variant="text"
        startIcon={<MoreVert />}
        sx={{ textTransform: "none" }}
      >
        More filters
      </Button> */}

      {/* View Options */}
      <Box id="inner2" sx={{ 
       display: "flex",
       justifyContent:'space-between',
       gap:45,
        }}>

      <Box sx={{
       //textAlign: "left", 
        color: "#33691e"
        }}>
        <span>100 </span>matching animals
      </Box>

      <Box>
       {/* Sort Dropdown */}
       <TextField
        select
        label="Sort by"
        defaultValue="Featured"
        variant="outlined"
        size="small"
        sx={{ minWidth: "150px" }}
      >
        <MenuItem value="Featured">Featured</MenuItem>
        <MenuItem value="Newest">Newest</MenuItem>
        <MenuItem value="Closest">Closest</MenuItem>
      </TextField>
      <Button
         data-aos="zoom-in"
          variant="contained"
          size="small"
          sx={{
            backgroundColor: '#558b2f',
            color: "white",
            ml:5
            // "&:hover": { backgroundColor:'#689f38'},
          }}
        >
          <Search/> Search
        </Button>
      </Box>
      </Box>
    </Box>
    <Box>
        <FeaturedPets/>
      </Box>
    </Box>
  );
}
