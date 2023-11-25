import React from "react";
import { SearchIcon } from "@resort-site/components/icons";

export default function SearchInput(): React.ReactNode {
  return (
    <>
      <div className="flex mt-1">
        <div className="relative w-full">
          <input
            style={{ borderRadius: 20 }}
            type="search"
            id="search-dropdown"
            className="block w-72 pr-8 text-right p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white"
          >
            <div className="mb-3 mr-2">
              <SearchIcon />
              <span className="sr-only">Search</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
