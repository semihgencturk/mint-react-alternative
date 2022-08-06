import React from "react";
import HorizontalCard from "../ui/HorizontalCard";

const EventCard = ({ items }) => {
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

export default EventCard;
