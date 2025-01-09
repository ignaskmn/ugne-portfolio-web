"use client";
import { useState, useEffect } from "react";
import type { Header } from "@/app/_types/payload-types";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import NavItem from "./NavItem";
import Burger from "./Burger";

export default function Nav({ navItems }: Header) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

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
              className="w-full lowercase inline-block border border-1 border-white py-2 px-8 text-xl bg-black text-white hover:bg-white hover:text-black"
            >
              <button
                className="w-full flex justify-start"
                onClick={() => router.back()}
              >
                <div>back</div>
              </button>
            </li>
          )}
        </ul>
      )}
      {!menuOpen && (
        <ul className={`md:flex-row gap-2 md:gap-8 hidden md:flex flex-col`}>
          {navItems?.map((item) => <NavItem key={item.id} link={item.link} />)}
          {loaded && !isHome && (
            <li role="button">
              <button onClick={() => router.back()}>
                <div className="w-10">
                  <ArrowUturnLeftIcon />
                </div>
              </button>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
