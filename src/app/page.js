import Navbar from "@/Shared/Navbar";

import React from "react";
import Banner from "./HomeComponents/Banner";
import CompanyDetails from "./HomeComponents/Company";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <CompanyDetails />
      </main>
    </div>
  );
};

export default HomePage;
