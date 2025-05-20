"use client";

import { ReactNode, useState, useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";

export default function LayoutClient({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setIsOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
      <Nav isOpen={isOpen} toggleNav={toggleNav} />
      <main>{children}</main>
    </>
  );
}
