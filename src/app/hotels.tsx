import React from "react";
import HotelCard from "@resort-site/components/hotel-card";
import { getHotels } from "@resort-site/services";

export default function Hotels(): React.ReactNode {
  const hotels = getHotels();
  return (
    <div className="bg-white lg:grid xl:grid-cols-2 grid-cols-1 md:flex md:flex-col sm:flex sm:flex-col gap-16 md:gap-8 px-4 py-8">
      {hotels.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </div>
  );
}
