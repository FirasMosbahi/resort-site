import React, { useEffect, useState } from "react";
import CityCard from "@resort-site/components/CityCard";
import MiniCityCard from "@resort-site/components/mini-city-card";

export default function VoyageCard({
  title,
}: {
  title: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
        <strong className="ml-4">{title}</strong>
        <p className="mr-4">Voir Tous</p>
      </div>
      <CityCard isHorizontal={true} />
      <div className={`flex flex-col sm:flex-row justify-center gap-4`}>
        <MiniCityCard />
        <MiniCityCard />
        <div className="lg:block hidden">
          <MiniCityCard />
        </div>
      </div>
    </div>
  );
}
