import VoyageOffer from "@resort-site/components/voyage-offer";
import VoyageNavbar from "@resort-site/components/voyage/voyage-navbar";
import VoyageDetails from "@resort-site/components/voyage-group/voyage-details";
import VoyageImages from "@resort-site/components/voyage-group/voyage-images";
import React from "react";

export default function VoyageGroupIndex(): React.ReactNode {
  return (
    <div className="bg-white ml-2 mr-4 lg:ml-8 lg:mr-16 mt-12 pt-4">
      <VoyageOffer />
      <VoyageNavbar />
      <div className="flex flex-row gap-16">
        <div>
          <VoyageDetails />
        </div>
        <div className="w-96">
          <VoyageImages />
        </div>
      </div>
    </div>
  );
}
