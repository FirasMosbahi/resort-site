import React from "react";
import SearchFilter from "@resort-site/components/search-filter";
import CityCardXl from "@resort-site/components/city-card-xl";

export default function VoyagesIndex(): React.ReactNode {
  return (
    <div className="flex flex-row bg-white mr-32 mt-8">
      <SearchFilter />
      <div className="flex flex-col items-start mt-6 flex-1">
        <CityCardXl />
      </div>
    </div>
  );
}
