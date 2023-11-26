import React from "react";
import NocesVoyagesFilter from "@resort-site/components/noces-voyages-filter";
import VoyageCard from "@resort-site/components/Voyage-card";
import VoyageCardWithImg from "@resort-site/components/voyage-card-with-img";
import CityCard from "@resort-site/components/CityCard";

export default function NocesVoyagesIndex(): React.ReactNode {
  return (
    <>
      <NocesVoyagesFilter />
      <div className="bg-white mr-32 ml-8">
        <div className="flex flex-col xl:flex-row gap-4 mt-16 w-screen">
          <VoyageCard title="Voyages Organisées" />
          <VoyageCardWithImg
            title="Circuits Sud"
            imageUrl="https://th.bing.com/th/id/OIP.R3osXfaOo7ZExMdxL5Y09QHaE8?rs=1&pid=ImgDetMain"
          />
        </div>
        <div className="flex flex-row mb-4 mt-8 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">Voyages de Noces / A la Carte</strong>
          <p className="mr-4">Voir Tous</p>
        </div>
        <div className="grid grid-cols-3">
          <CityCard isHorizontal={false} />
          <CityCard isHorizontal={false} />
          <CityCard isHorizontal={false} />
        </div>
        <div className="flex flex-row mb-4 mt-8 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">Hotels en Tunisie :</strong>
          <p className="mr-4">Voir Tous</p>
        </div>
        <div className="grid grid-cols-2 gap-8 pb-24">
          <VoyageCardWithImg imageUrl={"/hotel-categories/hotel-sur-mer.jpg"} />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-recommandé.jpg"}
          />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-all-inclusive.jpg"}
          />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-toboggan.jpg"}
          />
        </div>
      </div>
    </>
  );
}
