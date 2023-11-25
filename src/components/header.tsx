import React from "react";
import Image from "next/image";
import SearchInput from "@resort-site/components/search-input";
import LoginButton from "@resort-site/components/login-button";
import Infos from "@resort-site/components/infos";
import Navbar from "@resort-site/components/navbar";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="flex flex-row justify-between mt-16">
        <Image
          src="/logo_jektis.png"
          alt="jektis logo"
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          <div className="flex flex-row pl-80">
            <SearchInput />
            <LoginButton />
          </div>
          <Infos />
        </div>
      </div>
      <Navbar />
    </>
  );
}
