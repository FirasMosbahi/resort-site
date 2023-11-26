import React from "react";
import CityCard from "@resort-site/components/CityCard";
import MiniCityCard from "@resort-site/components/mini-city-card";

export default function VoyageCardWithImg({
  title,
  imageUrl,
}: {
  title?: string;
  imageUrl: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col">
      {title && (
        <div className="flex flex-row mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">{title}</strong>
          <p className="mr-4">Voir Tous</p>
        </div>
      )}
      <img src={imageUrl} className="h-80 border-transparent rounded-xl" />
      <div className="grid grid-cols-3 gap-4">
        <MiniCityCard />
        <MiniCityCard />
        <MiniCityCard />
      </div>
    </div>
  );
}
