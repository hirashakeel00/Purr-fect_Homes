import { useState } from "react";
import { Container, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button, Box, Card, CardContent, FormGroup } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RabbitIcon from "@mui/icons-material/Pets";

export default function ListPetForm() {
  const [petType, setPetType] = useState("");
  const [bondedPair, setBondedPair] = useState("no");
  const [reasons, setReasons] = useState([]);
  const [duration, setDuration] = useState("1 month");

  const handleReasonChange = (event) => {
    const { value } = event.target;
    setReasons((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, display: "flex", justifyContent: "space-between", flexDirection: 'column' }}>
      <Typography variant="h5" gutterBottom>
        Step 1: The Basics
      </Typography>
      
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">What type of pet are you rehoming? *</FormLabel>
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          {["Dog", "Cat", "Rabbit"].map((pet) => (
            <Card
              key={pet}
              onClick={() => setPetType(pet)}
              sx={{
                textAlign: "center",
                cursor: "pointer",
                border: petType === pet ? "2px solid green" : "1px solid gray",
                flex: 1,
              }}
            >
              <CardContent>
                {pet === "Dog" && <PetsIcon fontSize="large" />}
                {pet === "Cat" && <FavoriteIcon fontSize="large" />}
                {pet === "Rabbit" && <RabbitIcon fontSize="large" />}
                <Typography>{pet}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </FormControl>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Are you rehoming a bonded pair? *</FormLabel>
          <RadioGroup 
  row 
  value={bondedPair} 
  onChange={(e) => setBondedPair(e.target.value)} 
  sx={{ display: "flex", alignItems: "center" }}
>
  <FormControlLabel 
    value="no" 
    control={<Radio />} 
    label="No" 
    sx={{ marginRight: 2 }} // Ensures spacing between the options
  />
  <FormControlLabel 
    value="yes" 
    control={<Radio />} 
    label="Yes" 
  />
</RadioGroup>

        </FormControl>
        
        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Why do you need to rehome your pet? *</FormLabel>
          <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              "Behavioural Issues",
              "Busy Schedule",
              "Change in Family Circumstances",
              "Does not get along with another Pet",
              "Fostered",
              "Found or Abandoned",
              "Human Health Issues (e.g. allergy, sickness)",
              "Infant, young children or pregnancy",
              "Landlord permission issue",
              "Ongoing costs (e.g. lost job)",
              "Pet Medical expenses (e.g. vet procedure)",
            ].map((reason) => (
              <FormControlLabel
                key={reason}
                control={<Checkbox checked={reasons.includes(reason)} onChange={handleReasonChange} value={reason}/>}
                label={reason}
                sx={{ display: 'flex', alignItems: 'center', gap: 1}} // Adjusted margin for alignment
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>

      <FormLabel component="legend" sx={{ mt: 3 }}>How long are you able to keep your pet/s while we help find a suitable new home? *</FormLabel>
      <FormControl>
        <RadioGroup value={duration} onChange={(e) => setDuration(e.target.value)} sx={{ border: '2px solid red' }}>
          {["Less than 1 month", "1 month", "2 months", "Until a home is found"].map((option) => (
            <FormControlLabel key={option} value={option} control={<Radio />} label={option} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} />
          ))}
        </RadioGroup>
      </FormControl>
      
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Continue</Button>
    </Container>
  );
}