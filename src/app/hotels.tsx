import React from "react";
import HotelCard from "@resort-site/components/hotel-card";

export default function Hotels(): React.ReactNode {
  let cards: React.ReactNode[] = [];
  for (let i = 0; i < 8; i++) {
    cards.push(<HotelCard />);
  }
  return (
    <div className="bg-white lg:grid xl:grid-cols-2 grid-cols-1 md:flex md:flex-col sm:flex sm:flex-col gap-16 md:gap-8 px-4 py-8">
      {cards}
    </div>
  );
}
