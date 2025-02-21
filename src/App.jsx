import React, { useEffect } from "react";
import {Routes, Route,Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HowToAdopt from "./components/HowToAdopt";
import "./App.css"; // Optional: App-level styles
import Container from '@mui/material/Box';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import LoginDialog from "./components/LoginDialog.jsx";
import PetCard from "./components/PetCard.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import BreedDetect from "./components/BreedDetect.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ListDialog from "./components/ListDialog.jsx";
import ListPetForm from "./components/ListPetForm.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
      <Container className="app">
        <Header />
        <main>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/HomePage.jsx" element={<HomePage/>} />
            <Route path="/HowToAdopt.jsx" element={<HowToAdopt/>}/>
            <Route path="/pet/:id" element={<PetCard />} />
            <Route path="/LoginDialog.jsx" element={<LoginDialog />} />
            <Route path="/LoginForm.jsx" element={<LoginForm />} />
            <Route path="/RegisterForm.jsx" element={<RegisterForm />} />
            <Route path="/BreedDetect.jsx" element={<BreedDetect/>} />
            <Route path="/AboutUs.jsx" element={<AboutUs/>} />
            <Route path="/ListDialog.jsx" element={<ListDialog/>} />
            <Route path="/ListPetForm.jsx" element={<ListPetForm/>} />
          </Routes>
          </LocalizationProvider>

        </main>
        <Footer />
      </Container>
  );
}

export default App;