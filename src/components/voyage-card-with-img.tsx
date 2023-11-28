"use client";

import React, { useEffect, useState } from "react";
import CityCard from "@resort-site/components/CityCard";
import MiniCityCard from "@resort-site/components/mini-city-card";

export default function VoyageCardWithImg({
  title,
  imageUrl,
}: {
  title?: string;
  imageUrl: string;
}): React.ReactNode {
  const [horizontal, setHorizontal] = useState(window.innerWidth < 700);

  const handleResize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 700) {
      setHorizontal(false);
    } else {
      setHorizontal(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col mr-12 lg:mr-0">
      {title && (
        <div className="flex flex-row mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">{title}</strong>
          <p className="mr-4">Voir Tous</p>
        </div>
      )}
      <img
        src={imageUrl}
        className="md:h-72 md:w-full xl:h-80 border-transparent rounded-xl"
      />
      <div className={`grid grid-cols-${horizontal ? "3" : "2"} gap-4`}>
        <MiniCityCard />
        <MiniCityCard />
        {horizontal && <MiniCityCard />}
      </div>
    </div>
  );
}
