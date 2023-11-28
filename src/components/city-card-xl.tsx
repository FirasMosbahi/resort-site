import React from "react";
import Stars from "@resort-site/components/stars";
import PriceButtonXl from "@resort-site/components/price-button-xl";
import StaticStars from "@resort-site/components/static-stars";
import { Star } from "@resort-site/components/icons";

export default function CityCardXl(): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star width={20} height={20} />);
  }
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div
          className="overflow-hidden relative flex lg:flex-row flex-col rounded-xl bg-[#ececec] bg-clip-border
            text-gray-700 shadow-md"
        >
          <div className="bg-gradient-radial from-[#183595] to-[#f903bf] border-transparent rounded-full p-24 -top-28 -right-16 xl:h-96 xl:w-96 xl:p-48 flex flex-row items-start justify-start absolute xl:-top-72 xl:-right-48"></div>
          <div className="absolute flex flex-col items-end text-white top-2 right-4">
            <p className="text-sm">Encore</p>
            <strong className="text-xl">2 Places</strong>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="object-cover w-full lg:w-80 h-60 lg:h-96 xl:h-64 rounded-l-xl"
          />
          <div className="px-6 py-4 bg-[#ececec] bg-clip-border">
            <strong className="block leading-6 font-sans text-2xl font-semibold uppercase tracking-normal text-black antialiased">
              Bali
            </strong>
            <div className="flex flex-row items-center tracking-normal ">
              <p className="flex items-center gap-3 flex-row font-sans text-blue-gray-900">
                Indonésie
              </p>
              <p className="flex text-xs pt-1 pl-8 flex-col xl:flex-row gap-2 items-center">
                Note : <div className="flex flex-row">{stars}</div>
              </p>
            </div>
            <div className="flex flex-col my-4">
              <strong>10 jours / 9 nuits</strong>
              <div className="flex flex-row items-center gap-4">
                <strong>Du 05 au 14 septembre 2023</strong>
                <button className="bg-[#d7d7d7] border-white border-4 rounded-2xl px-2">
                  <strong>Voir plus</strong>
                </button>
                <button className="bg-[#d7d7d7] border-white border-4 rounded-2xl px-2">
                  <strong>Programme</strong>
                </button>
              </div>
            </div>
            <PriceButtonXl />
          </div>
        </div>
      </div>
    </>
  );
}
