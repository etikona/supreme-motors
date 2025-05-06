import Navbar from "@/Shared/Navbar";

import React from "react";
import Banner from "./HomeComponents/Banner";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
      </main>
    </div>
  );
};

export default HomePage;
