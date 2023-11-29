import React from "react";
import { Star } from "@resort-site/components/icons";
import PriceButton from "@resort-site/components/price-button";
import Stars from "@resort-site/components/stars";

export default function HotelDescriptionHeader(): React.ReactNode {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-12 pt-4">
      <div className="flex items-end gap-2 xl:flex-row flex-col md:items-center md:justify-center">
        <div>
          <p className="text-[#0f4d99] sm:text-center md:text-4xl  font-extrabold ">
            Radisson Blu Resort & Thalasso
          </p>
        </div>
        <Stars number={5} height={30} width={30} />
      </div>
      <PriceButton price={499} enfantGratuit={false} />
    </div>
  );
}
