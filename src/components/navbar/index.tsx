"use client";

import { useState } from "react";
import Link from "next/link";

import { LogoWhite, MenuIcon } from "@/assets/svgs";
import { NavbarMenu } from "./NavbarMenu";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm bg-blue/40">
        <div className="my-container">
          <div className="py-5 flex items-center justify-between">
            <Link href="/">
              <LogoWhite className="size-14 md:size-16 xl:size-[100px]" />
            </Link>
            <MenuIcon
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpenMobileMenu((p) => !p)}
            />
            <div className="hidden lg:block">
              <NavbarMenu />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isOpenMobileMenu}
        onClose={() => setIsOpenMobileMenu(false)}
      />
    </>
  );
}
