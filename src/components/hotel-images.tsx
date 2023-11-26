import React from "react";
import Image from "next/image";

export default function HotelImages(): React.ReactNode {
  return (
    <>
      <div className="flex flex-row gap-4">
        <Image
          className="rounded-xl"
          src="/hotel/pic-hotel-1.jpg"
          alt="pic 1"
          width={550}
          height={550}
        />
        <div className="flex flex-col gap-4">
          <Image
            className="rounded-xl"
            src="/hotel/pic-hotel-2.jpg"
            width={515}
            height={250}
            alt="pic 1"
          />
          <div className="flex flex-row gap-4">
            <Image
              src="/hotel/pic-hotel-3.jpg"
              className="rounded-xl"
              width={250}
              height={250}
              alt="pic 1"
            />
            <Image
              src="/hotel/pic-hotel-4.jpg"
              className="rounded-xl"
              width={250}
              height={250}
              alt="pic 1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
