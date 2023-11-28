import React from "react";
import Image from "next/image";
import SearchInput from "@resort-site/components/search-input";
import LoginButton from "@resort-site/components/login-button";
import Infos from "@resort-site/components/infos";
import Navbar from "@resort-site/components/navbar";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between w-screen block">
        <div className="flex flex-col xl:flex-row justify-between mt-16">
          <img src="/logo_jektis.png" alt="jektis logo" />
          <div className="flex flex-col">
            <div className="hidden xl:flex xl:flex-row pl-80 pr-24">
              <SearchInput />
              <LoginButton />
            </div>
            <Infos />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}
