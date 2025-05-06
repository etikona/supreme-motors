import Navbar from "@/Shared/Navbar";

import React from "react";
import Banner from "./HomeComponents/Banner";
import CompanyDetails from "./HomeComponents/Company";
import FoundersSection from "./HomeComponents/Founder";
import MissionVisionSection from "./HomeComponents/Objective";
import Footer from "@/Shared/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <CompanyDetails />
        <FoundersSection />
        <MissionVisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
