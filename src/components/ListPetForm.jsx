import { useState } from "react";
import { Container,Typography,CardMedia, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox, Button, Box, Card, CardContent, FormGroup,TextField ,Grid} from "@mui/material";
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import cat4 from '../assets/cat4.png';

export default function ListPetForm() {
  const [petType, setPetType] = useState("");
  const [reasons, setReasons] = useState([]);
  const [duration, setDuration] = useState("1 month");

  const handleReasonChange = (event) => {
    const { value } = event.target;
    setReasons((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

    const [images, setImages] = useState([]);
  
    const handleImageChange = (event) => {
      const files = Array.from(event.target.files);
      if (files.length + images.length >= 3) {
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
      } else {
        alert("Please select at least 3 images.");
      }
    };
  
    const handleButtonClick = () => {
      document.getElementById("imageInput").click();
    };
  

  const petImages = {
    Dog: cat1,
    Cat: cat2,
    Rabbit: cat3,
    Other:cat4
  };

  return (
    <Container maxWidth="sm" sx={{ 
      mt: 4, 
      display: "flex", 
      justifyContent: "space-between", 
      flexDirection: 'column',
      letterSpacing:'2px'}}>
      
      <FormControl component="fieldset" sx={{ mb:2}}>
        <Typography sx={{fontSize:'20px',fontWeight:"600"}}>What type of pet are you rehoming? *</Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1, overflow: "hidden",width:'45rem',height:'15rem'}}>
          {["Dog", "Cat", "Rabbit","Other"].map((pet) => (
            <Card
              key={pet}
              onClick={() => setPetType(pet)}
              sx={{
                textAlign: "center",
                cursor: "pointer",
                border: petType === pet ? "2px solid green" : "1px solid #b8ecaa",
                flex: 1,
                pt:1,
                backgroundColor:'#b8ecaa',
              }}
            >
               <CardMedia
        component="img"
        height="100"
        image={petImages[pet]}
        alt={pet}
        sx={{ objectFit: "cover"}}
      />
              <CardContent>
                <Typography>{pet}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </FormControl>



      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

        <FormControl component="fieldset" sx={{ mb: 2 }}>
        <Typography sx={{fontSize:'20px',fontWeight:"600"}}>Where are you currently based?*
</Typography>
          <TextField></TextField>
        </FormControl>

        <FormControl component="fieldset" sx={{ mb: 3 }}>
        <Typography sx={{fontSize:'20px',fontWeight:"600"}}>Pet description*
</Typography>
          <TextField placeholder="Luna is an affectionate 2-year-old tabby cat looking for her forever home"></TextField>
        </FormControl>
        
        <FormControl component="fieldset" sx={{ mb: 3 }}>
        <Typography sx={{fontSize:'20px',fontWeight:"600"}}>Why do you need to rehome your pet? *</Typography>
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


      <Typography sx={{fontSize:'20px',fontWeight:"600"}}>What is the primary color of your pet</Typography>
      <FormControl>
        <TextField sx={{mb: 3}}></TextField>
      </FormControl>
      <Typography sx={{fontSize:'20px',fontWeight:"600"}}>What is the weight of your pet</Typography>
      <FormControl>
        <TextField sx={{mb: 3}}></TextField>
      </FormControl><Typography sx={{fontSize:'20px',fontWeight:"600"}}>What is the size of your pet</Typography>
      <FormControl>
        <TextField sx={{mb: 3}}></TextField>
      </FormControl>

      <FormControl>
      <Typography sx={{fontSize:'20px',fontWeight:"600"}}>What is the gender of your pet</Typography>
      <RadioGroup sx={{mb: 3}}
        column={true}
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="Female"
          control={<Radio />}
          label="Female"
          labelPlacement="End"
        />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>

    <Typography sx={{fontSize:'20px',fontWeight:"600"}}>What is the age of your pet</Typography>
      <FormControl>
        <TextField sx={{mb: 3}}></TextField>
      </FormControl><Typography sx={{fontSize:'20px',fontWeight:"600"}}>What is the breed of your pet</Typography>
      <FormControl>
        <TextField sx={{mb: 3}}></TextField>
      </FormControl><Typography sx={{fontSize:'20px',fontWeight:"600"}}>What is the primary color of your pet</Typography>
      <FormControl>
        <TextField sx={{mb: 3}}></TextField>
      </FormControl>
      
      <Box sx={{ textAlign: "center", mt: 2 }}>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {images.length >= 3 ? (
        <Grid container spacing={4} justifyContent="center">
          {images.map((image, index) => (
            <Grid item key={index}>
              <img
                src={image}
                alt={`Uploaded ${index + 1}`}
                style={{ width: "150px", height: "150px", borderRadius: "5px", objectFit: "cover" }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Button
          variant="contained"
          sx={{ backgroundColor: "#64A651", mt: 2, mb: 5 }}
          onClick={handleButtonClick}
        >
          Upload Image
        </Button>
      )}
    </Box>

    <Button variant='contained' sx={{backgroundColor:'#64A651', mt:2,
                                             "&:hover": {
                                              backgroundColor: "#538A44", // Background color on hover
                                              },}}>List the Pet
            </Button>

    </Container>
  );
}