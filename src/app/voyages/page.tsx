import React from "react";
import SearchFilter from "@resort-site/components/search-filter";
import CityCardXl from "@resort-site/components/city-card-xl";
import { cityCards } from "@resort-site/mocks/cityCard_moks";

export default function VoyagesIndex(): React.ReactNode {
  const cities = cityCards;
  return (
    <div className="flex flex-col lg:flex-row bg-white mr-8 pr-8 xl:mr-32 mt-8">
      <SearchFilter />
      <div className="flex flex-col gap-8 items-start mt-6 flex-1">
        {cities.map((city, index) => (
          <div key={index}>
            <CityCardXl city={city} key={city.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
