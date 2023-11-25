import React from "react";
import { Ok, Star } from "@resort-site/components/icons";
import PriceButton from "@resort-site/components/price-button";

export default function HotelCard(): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star />);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative flex flex-row rounded-xl bg-[#ececec] bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <p className=" block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
              Radisson Blu Resort & Thelasso
            </p>
            <p className="mb-2 flex items-center gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
              Hammamet <div className="flex flex-row">{stars}</div>
            </p>
            <ul className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              <li className="flex flex-row items-center gap-3">
                <Ok /> <p>Minimum Stay : 2 nuités</p>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Ok /> All inclusive
              </li>
              <li className="flex flex-row items-center gap-3">
                <Ok /> {"Enfant < 6 ans"} : gratuit
              </li>
            </ul>
            <PriceButton />
          </div>
        </div>
      </div>
    </>
  );
}
