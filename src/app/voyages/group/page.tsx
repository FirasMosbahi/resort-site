import VoyageOffer from "@resort-site/components/voyage-offer";
import { Home } from "@resort-site/components/icons";
import ProgramDayDescription from "@resort-site/components/program-day-description";
import ChambreSelectionTable from "@resort-site/components/chambre-selection-table";
import VoyageNavbar from "@resort-site/components/voyage/voyage-navbar";

export default function VoyageGroupIndex(): React.ReactNode {
  return (
    <div className="bg-white ml-2 mr-4 lg:ml-8 lg:mr-32 mt-12 pt-4">
      <VoyageOffer />
      <VoyageNavbar />
      <div className="mt-6 mb-4">
        <strong className="text-[#1b53a1] text-3xl ">PROGRAMME</strong>
      </div>
      <div className="border-b-4 pb-8 mb-4">
        <ProgramDayDescription />
        <ProgramDayDescription />
        <button className="bg-[#cacaca] text-black border-transparent rounded-xl text-xl py-0.5 mt-4 px-4">
          Voir plus
        </button>
      </div>
      <ChambreSelectionTable />
    </div>
  );
}
