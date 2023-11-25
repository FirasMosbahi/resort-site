import React from "react";

export default function PriceButton(): React.ReactNode {
  return (
    <div
      style={{ borderRadius: 20 }}
      className="bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1"
    >
      <div className="bg-[#ececec] flex flex-row ">
        <div
          style={{
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
          }}
          id="price"
          className="flex flex-col pl-2 pr-2 mr-2 text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
        >
          <p>A partir de</p>
          <div className="flex flex-row">
            <p className="text-5xl ">199</p>
            <div className="flex flex-col ">
              <p className="">TND</p>
              <p className="text-xs">Par personne</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#ececec] justify-center mr-2">
          <p className="text-xs">Hébergement en</p>
          <strong className="text-xs">LPD</strong>
          <p className="text-xs">Enfants -6 ans</p>
          <strong className="text-xs">Gratuit</strong>
        </div>
      </div>
    </div>
  );
}
