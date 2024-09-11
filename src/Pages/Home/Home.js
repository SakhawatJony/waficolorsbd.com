import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Client from "./Client";
import PrintExpertise from "./PrintExpertise";
import Customers from "./Customers";
import LetestNews from "./LetestNews";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <Box>
      <Banner />
      <AboutUs />
      <Client/>
      <PrintExpertise/>
      <Customers/>
      <LetestNews/>
      <Footer/>
    </Box>
  );
};

export default Home;
