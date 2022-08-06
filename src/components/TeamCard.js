import React from "react";
import HorizontalCard from "../ui/HorizontalCard";

const TeamCard = ({ items }) => {
  return (
    <>
      {items.map((item, key) => (
        <>
          <HorizontalCard key={key} item={item} />
          <br />
        </>
      ))}
    </>
  );
};

export default TeamCard;
