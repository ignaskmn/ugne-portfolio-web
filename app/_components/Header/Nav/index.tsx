"use client";
import { useState, useEffect } from "react";
import type { Header } from "@/app/_types/payload-types";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import Burger from "./Burger";
import Link from "next/link";

export default function Nav({ navItems }: Header) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsHome(pathname === "/" || pathname === "/home");
    setLoaded(true);
    setMenuOpen(false);
  }, [pathname]);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="md:hidden" role="button" tabIndex={0}>
        <Burger isOpen={menuOpen} onClick={handleBurgerClick} />
      </div>

      {menuOpen && (
        <ul className={`flex flex-col md:flex-row gap-2 md:gap-8`}>
          {navItems?.map((item) => (
            <li className="w-full" key={item.link.label}>
              <NavItem key={item.id} link={item.link} />
            </li>
          ))}
          {loaded && !isHome && (
            <li
              role="button"
              className="w-full lowercase inline-block border border-1 border-white py-2 px-8 text-xl bg-black text-white hover:bg-white hover:text-black "
            >
              <Link href="/" className="w-full flex">
                <div className="w-6 mr-4">
                  <ArrowUturnLeftIcon />
                </div>
                <div className="w-full">Back</div>
              </Link>
            </li>
          )}
        </ul>
      )}
      {!menuOpen && (
        <ul className={`md:flex-row gap-2 md:gap-8 hidden md:flex flex-col`}>
          {navItems?.map((item) => <NavItem key={item.id} link={item.link} />)}
          {loaded && !isHome && (
            <li role="button">
              <Link href="/">
                <div className="w-10">
                  <ArrowUturnLeftIcon />
                </div>
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
