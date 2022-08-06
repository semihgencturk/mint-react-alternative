import React from "react";
import HorizontalCard from "../ui/HorizontalCard";

const CommunityCard = ({ items }) => {
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

export default CommunityCard;
