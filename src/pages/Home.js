import React from "react";
import Bundle from "../components/Bundle";
import Divider from "../ui/Divider";
import MintExplanation from "../components/MintExplanation";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Bundle />
      <Divider />
      <MintExplanation />
      <Divider />
      <Partners />
      <Divider />
      <Contact />
    </>
  );
};

export default Home;
