import React from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import FeaturedPets from "./FeaturedPets";

export default function HowToAdopt() {
  return (
    <Box>
      <Box
        id="outer"
        margin={{ xs: "0 1rem", sm: "0 2rem", md: "0 3rem" }}
        borderRadius="1rem"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: { xs: 3, sm: 5, md: 7 },
          mt: 4,
          backgroundColor: "#dcedc8",
          gap: 3,
        }}
      >
        <Box
          id="inner1"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {/* Animal Type Dropdown */}
          <TextField
            select
            defaultValue="All"
            variant="outlined"
            size="small"
            helperText="Select animal type"
            FormHelperTextProps={{ sx: { fontSize: "14px", color: "#33691e" } }}
            sx={{ minWidth: "120px" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Dogs">Dogs</MenuItem>
            <MenuItem value="Cats">Cats</MenuItem>
            <MenuItem value="Birds">Birds</MenuItem>
            <MenuItem value="Rabbits">Rabbits</MenuItem>
          </TextField>

          {/* Location Input */}
          <TextField
            placeholder="Nationwide... or start typing"
            variant="outlined"
            size="small"
            helperText="Select location"
            FormHelperTextProps={{ sx: { fontSize: "14px", color: "#33691e" } }}
            sx={{ minWidth: { xs: "100%", sm: "300px" } }}
          />

          {/* Breed Input */}
          <TextField
            placeholder="All breeds"
            variant="outlined"
            size="small"
            helperText="Select breed"
            FormHelperTextProps={{ sx: { fontSize: "14px", color: "#33691e" } }}
            sx={{ minWidth: { xs: "100%", sm: "300px" } }}
          />
        </Box>

        {/* View Options */}
        <Box
          id="inner2"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          <Box sx={{ color: "#33691e", textAlign: "center" }}>
            <span>100 </span>matching animals
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
                backgroundColor: "#558b2f",
                color: "white",
              }}
            >
              <Search /> Search
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <FeaturedPets />
      </Box>
    </Box>
  );
}
