import React from "react";
import {
  Calendar,
  Home,
  NextArrow,
  NextArrowWhite,
  Star,
  TwoUsers,
} from "@resort-site/components/icons";
import PriceButton from "@resort-site/components/price-button";
import HotelImages from "@resort-site/components/hotel-images";
import HotelReservationTable from "@resort-site/components/hotel-reservation-table";
import Amenagement from "@resort-site/components/amenagement";
import HotelDescriptionHeader from "@resort-site/components/hotel/hotel-description-header";
import HotelDetailsNavbar from "@resort-site/components/hotel/hotel-details-navbar";
import UpdateReservation from "@resort-site/components/hotel/update-reservation";

export default function HotelDetailsIndex(): React.ReactNode {
  return (
    <div className="bg-white mt-12 h-screen pl-4 lg:mr-32 lg:pl-12">
      <HotelDescriptionHeader />
      <p className="mt-12 tracking-wide text-black text-2xl">Hammamet</p>
      <p className="text-black mb-8">
        Minimum stay: 2 Nuités / All inclusive / Enfants - 6 ans gratuit
      </p>
      <HotelImages />
      <HotelDetailsNavbar />
      {/*reservation*/}
      <UpdateReservation />
      {/*table*/}
      <HotelReservationTable />

      <Amenagement />
      <div id="prestation" className="mr-32">
        <strong className="text-[#144e8b] text-3xl">
          PRESTATIONS ET SERVICES
        </strong>
        <p className="text-black text-sm mt-8 pb-24">
          L{"'"}iberostar Diar El Andalous est situé sur la coté
          médiaterranéenne à Sousse. Il surplombe les plages de sable fin et
          dispose d{"'"}une piscine intérieure et extérieure, d{"'"}un spa ainsi
          que d{"'"}une piscine et d{"'"}une aire de jeux pour enfants
        </p>
      </div>
    </div>
  );
}
