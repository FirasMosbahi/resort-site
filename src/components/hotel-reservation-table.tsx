import React from "react";
import { TwoUsers } from "@resort-site/components/icons";

export default function HotelReservationTable(): React.ReactNode {
  return (
    <div className="flex flex-col mt-12 mr-28">
      <div className="grid mr-2 grid-cols-11 inline-flex rounded-md shadow-sm mt-8 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
        <button
          type="button"
          className="col-span-3 px-4 py-2  text-xl font-medium text-white border rounded-s-lg border-white"
        >
          <strong>Type de chambre</strong>
        </button>
        <button
          type="button"
          className="col-span-6 flex-col pl-8 items-start px-4 py-2 text-xl w-full font-medium text-white border border-b border-white"
        >
          <strong>Services</strong>
        </button>
        <button
          type="button"
          className=" col-span-2 px-4 py-2 flex flex-row items-start text-xl font-medium text-white border border-white rounded-e-lg"
        >
          <strong className="pl-4">Total 1 Nuitées</strong>
        </button>
      </div>
      <div className="grid mr-2 grid-cols-11 inline-flex rounded-md shadow-sm mt-1 bg-[#ececec]">
        <div className="pt-8 col-span-3 px-4 py-2  text-xl font-medium text-white border border-white rounded-se-lg">
          <div className="flex flex-row items-start mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600  border-white"
            />
            <div className="flex flex-col">
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-[#a9a9a9]"
              >
                Chambre 1 :
              </label>
              <strong className="pl-2 pt-2 text-black">Chambre Double</strong>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex flex-row gap-4 items-center pl-4 justify-start px-2 py-2 text-xl w-full font-medium text-white border border-b border-white">
          <TwoUsers />
          <select
            id="countries"
            className="ml-2 border bg-[#ececec] border-white text-gray-900 text-sm rounded-lg block w-2/5 p-2.5"
          >
            <option selected>Logement petit déjeuner</option>
            <option>Logement petit déjeuner</option>
            <option>Logement petit déjeuner + déjeuner</option>
            <option>Logement complet</option>
          </select>
          <div className="flex flex-row justify-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-white focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-[#004fa4]"
            >
              <strong>Vue sur mer</strong>
            </label>
          </div>
          <button className="bg-[#004fa4] px-2 py-1 border rounded-xl">
            Sur Demande
          </button>
        </div>
        <div className="col-span-2 pt-8 px-4 py-2 flex flex-col items-end text-xl font-medium text-white border border-white rounded-e-lg">
          <strong className="text-[#004fa4] text-xl">
            88.000<sup>DT</sup>
          </strong>
          <strong className="text-black text-xs">Prix par nuit:</strong>
          <strong className="text-black text-xs">88.000DT</strong>
        </div>
      </div>
      <div className="grid mr-2 grid-cols-11 inline-flex rounded-md shadow-sm bg-[#ececec]">
        <div className="pt-8 col-span-3 px-4 py-2  text-xl font-medium text-white">
          <div className="flex flex-row items-start mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600  border-[#0b4ca9]"
            />
            <div className="flex flex-col">
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-[#a9a9a9]"
              >
                Chambre 2 :
              </label>
              <strong className="pl-2 pt-2 text-black">Chambre Double</strong>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex flex-row gap-4 items-center pl-4 justify-start px-2 py-2 text-xl w-full font-medium text-white border border-b border-white">
          <TwoUsers />
          <select
            id="countries"
            className="ml-2 border bg-[#ececec] border-white text-gray-900 text-sm rounded-lg block w-2/5 p-2.5"
          >
            <option selected>Logement petit déjeuner</option>
            <option>Logement petit déjeuner</option>
            <option>Logement petit déjeuner + déjeuner</option>
            <option>Logement complet</option>
          </select>
          <div className="flex flex-row justify-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-white focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-[#004fa4]"
            >
              <strong>Vue sur mer</strong>
            </label>
          </div>
          <button className="bg-[#004fa4] px-2 py-1 border rounded-xl">
            Sur Demande
          </button>
        </div>
        <div className="col-span-2 pt-8 px-4 py-2 flex flex-col items-end text-xl font-medium text-white border border-white rounded-e-lg">
          <strong className="text-[#004fa4] text-xl">
            88.000<sup>DT</sup>
          </strong>
          <strong className="text-black text-xs">Prix par nuit:</strong>
          <strong className="text-black text-xs">88.000DT</strong>
        </div>
      </div>
    </div>
  );
}
