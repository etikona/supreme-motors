import Navbar from "@/Shared/Navbar";

import React from "react";
import Banner from "./HomeComponents/Banner";
import CompanyDetails from "./HomeComponents/Company";
import FoundersSection from "./HomeComponents/Founder";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <CompanyDetails />
        <FoundersSection />
      </main>
    </div>
  );
};

export default HomePage;
