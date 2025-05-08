import Navbar from "@/Shared/Navbar";

import React from "react";
import Banner from "./HomeComponents/Banner";
import CompanyDetails from "./HomeComponents/Company";
import FoundersSection from "./HomeComponents/Founder";
import MissionVisionSection from "./HomeComponents/Objective";
import Footer from "@/Shared/Footer";
// app/page.tsx or app/layout.tsx

export const metadata = {
  title: "Supreme Motors | Home Page",
  description:
    "Explore new and used cars with Supreme Motors – Bangladesh's trusted car import-export brand. Transparent, affordable, and customer-focused.",
};
const HomePage = () => {
  return (
    <div>
      <Banner />
      <CompanyDetails />
      <FoundersSection />
      <MissionVisionSection />
    </div>
  );
};

export default HomePage;
