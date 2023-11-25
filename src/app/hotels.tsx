import React from "react";
import HotelCard from "@resort-site/components/hotel-card";

export default function Hotels(): React.ReactNode {
  let cards: React.ReactNode[] = [];
  for (let i = 0; i < 8; i++) {
    cards.push(<HotelCard />);
  }
  return (
    <div className="bg-white grid grid-cols-2 gap-16 px-4 py-8">{cards}</div>
  );
}
