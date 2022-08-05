import React from "react";
import { useRef } from "react";
import Bundle from "../components/Bundle";
import Divider from "../ui/Divider";
import MintExplanation from "../components/MintExplanation";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

const Home = () => {
  const myRef = useRef(null);
  const myRef2 = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScroll2 = () =>
    myRef2.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div onClick={executeScroll}>
        <Bundle />
      </div>
      <Divider />
      <div ref={myRef} onClick={executeScroll2}>
        <MintExplanation />
      </div>
      <Divider />
      <div ref={myRef2}>
        <Partners />
      </div>

      <Divider />
      <Contact />
    </>
  );
};

export default Home;
