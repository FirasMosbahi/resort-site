import React from "react";

export default function PriceButton(): React.ReactNode {
  return (
    <div
      style={{ borderRadius: 20 }}
      className="h-15 bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1"
    >
      <div className="bg-white flex flex-row ">
        <div
          style={{
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
          }}
          id="price"
          className="flex flex-col pl-2 pb-2 pr-2 mr-2 text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
        >
          <p>A partir de</p>
          <div className="flex flex-row">
            <p className="text-4xl leading-6">199</p>
            <div className="flex flex-col ">
              <p className="text-xs leading-3">TND</p>
              <p className="text-xs leading-3">Par personne</p>
            </div>
          </div>
        </div>
        <div className="flex leading-3 flex-col bg-white text-[#0f4d99] text-xs justify-center mr-2">
          <p>Hébergement en</p>
          <strong>LPD</strong>
          <p>Enfants -6 ans</p>
          <strong>Gratuit</strong>
        </div>
      </div>
    </div>
  );
}
