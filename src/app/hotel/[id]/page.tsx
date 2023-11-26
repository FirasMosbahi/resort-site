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

export default function HotelDetailsIndex(): React.ReactNode {
  return (
    <div className="bg-white mt-12 h-screen mr-32 pl-12">
      <div className="flex flex-row justify-center items-center gap-8 pt-4">
        <strong className="text-[#0f4d99] text-4xl">
          Radisson Blu Resort & Thalasso
        </strong>
        <div className="flex flex-row">
          {Array.from({ length: 5 }, (_, index) => index).map((value) => (
            <Star width={30} height={30} key={value} />
          ))}
        </div>
        <PriceButton />
      </div>
      <p className="mt-12 tracking-wide text-black text-2xl">Hammamet</p>
      <p className="text-black mb-8">
        Minimum stay: 2 Nuités / All inclusive / Enfants - 6 ans gratuit
      </p>
      <HotelImages />
      <div>
        <div
          className="inline-flex rounded-md shadow-sm mt-8 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
          role="group"
        >
          <button
            type="button"
            className="px-4 py-2  text-xl font-medium text-white border rounded-s-lg"
          >
            <strong>Tarifs et réservations</strong>
          </button>
          <button
            type="button"
            className="px-4 py-2 w-48 text-xl font-medium text-white border border-b border-gray-200"
          >
            <strong>Aménagement</strong>
          </button>
          <button
            type="button"
            className="px-4 py-2 w-44 text-xl font-medium text-white border border-b border-gray-200"
          >
            <strong>Descriptif</strong>
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xl w-40 font-medium text-white border border-b border-gray-200"
          >
            <strong>Carte</strong>
          </button>
          <button
            type="button"
            className="px-4 py-2 w-80 flex flex-row items-start text-xl font-medium text-white border border-gray-200 rounded-e-lg"
          >
            <strong className="pl-4">Avis</strong>
          </button>
        </div>
      </div>
      {/*reservation*/}
      <p>Tarifs & Réservations</p>
      <div className="flex flex-row items-center gap-16">
        <div className="flex flex-row text-black items-center border border-[#9d9d9d] rounded w-fit px-8 py-2">
          <Calendar />
          <div className="flex text-[#9d9d9d] text-xs flex-col ml-12 mr-24">
            <p>Du Jeudi</p>
            <p>19/10/2023</p>
          </div>
          <NextArrow />
          <div className="flex text-[#9d9d9d] text-xs flex-col ml-12 mr-24">
            <p>Au Vendredi</p>
            <p>20/10/2023</p>
          </div>
          <p className="bg-[#9d9d9d] text-white p-1 rounded mr-4">1 Nuitées</p>
          <strong>1 chambre: 2 adultes + 0 enfants</strong>
        </div>
        <div>
          <button className="bg-[#9d9d9d] text-white text-xl px-4 py-2 rounded-xl">
            <strong>Mettre à jour</strong>
          </button>
        </div>
      </div>
      {/*table*/}
      <HotelReservationTable />
      <div className="flex flex-row justify-end mr-32">
        <div className="flex flex-row border rounded-xl justify-end items-end px-8 py-4 bg-gradient-to-r from-[#004fa6] to-[#02c9b2] mt-8 w-fit">
          Total 2 adultes :{" "}
          <strong className="text-2xl ml-2">
            {"  "}
            176.000<sup>DT</sup>
          </strong>
        </div>
      </div>
      <div className="flex flex-row justify-end mr-32">
        <div className="flex flex-row border rounded-xl justify-center items-center gap-4 px-8 py-2 bg-[#9d9d9d] mt-8 w-fit">
          <strong className="text-xl">Je réserve</strong>
          <NextArrowWhite width={25} height={25} />
        </div>
      </div>
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
