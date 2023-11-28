import Image from "next/image";
import InputWithIcon from "@resort-site/components/input-with-icon";
import {
  Calendar,
  Localisation,
  Trolley,
  WhiteSearchIcon,
} from "@resort-site/components/icons";
import React from "react";
import Hotels from "@resort-site/app/hotels";
import HotelsFilter from "@resort-site/components/hotels/hotels-filter";

export default function Home() {
  return (
    <div className="flex flex-col mt-8 text-black">
      <HotelsFilter />
      <div className="mb-8 mt-8">
        <Hotels />
      </div>
    </div>
  );
}
