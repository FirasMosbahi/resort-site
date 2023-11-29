"use client";
import React, { useEffect, useState } from "react";
import CityCard from "@resort-site/components/CityCard";
import MiniCityCard from "@resort-site/components/mini-city-card";

export default function VoyageCard({
  title,
}: {
  title: string;
}): React.ReactNode {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
        <strong className="ml-4">{title}</strong>
        <p className="mr-4">Voir Tous</p>
      </div>
      <CityCard isHorizontal={width > 700} />
      <div className={`flex flex-col sm:flex-row justify-center gap-4`}>
        <MiniCityCard />
        <MiniCityCard />
        {width > 650 && <MiniCityCard />}
      </div>
    </div>
  );
}
