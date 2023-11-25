import React from "react";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex flex-col text-right tracking-wide pr-32 mt-8">
      <p className="text-2xl">
        Tel +216 71 70 69 00 / WhatsApp: +216 98 53 80 70
      </p>
      <p>Lun-Ven: 9h à 15h30 Sam: 9h à 13h</p>
      <p>
        Agence Ariana: 98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana
      </p>
      <p>Agence Menzah 9 : 22 Av. Abdelaziz Thaalbi, Menzah 9B</p>
    </div>
  );
}
