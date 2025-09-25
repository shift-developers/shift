import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { LogoWhite, MenuIcon } from "@/assets/svgs";
import { NavbarMenu } from "./NavbarMenu";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const classes = ["backdrop-blur-md", "shadow-sm", "bg-blue/40"];

    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 100) {
        headerRef.current?.classList.add(...classes);
      } else {
        headerRef.current?.classList.remove(...classes);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      >
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
