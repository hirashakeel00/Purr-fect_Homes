import React from "react";
import Banner from "./Banner";
import FeaturedPets from "./FeaturedPets";
import WhyChoose from "./WhyChoose";
import PetCare from './PetCare';
import HeroSection from "./HeroSection";
import BreedBtn from "./BreedBtn";

function HomePage({ featuredPets }) {
  return (
    <div className="home-page">
      <section className="search-section">
        <BreedBtn/>
        <Banner/>
      </section>

     <section>
      <PetCare/>
     </section>

      <section className="featured-section">
        <div id="Bg1">
        <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c5e1a5" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,64C672,21,768,11,864,26.7C960,43,1056,85,1152,106.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <h3>See our Featured Pets</h3>
        <FeaturedPets/>
        </div>
      </section>

      <section>
        <HeroSection/>
      </section>

      <section className="whyus-section">
        <div id="Bg2">
        <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#64A651" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,149.3C840,149,960,107,1080,90.7C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>        <h3>Why Choose Purr-fect Homes</h3>
        <WhyChoose/>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
