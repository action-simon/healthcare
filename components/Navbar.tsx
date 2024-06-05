import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages";
import { HeartPulseIcon, MessageCircle } from "lucide-react";

import Container from "@/components/Container";

import NavbarMobile from "@/components/NavBarMobile";
import { useEffect, useState } from "react";
import NavbarDesktop from "./NavBarDesktop";

export const Navbar = () => {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }
  return (
    <header className="sticky inset-0 z-20 h-20 w-full border-b-[1px] border-muted bg-background">
      <Container className="flex h-20 items-center justify-between py-0">
        {/* Logo */}
        <Link
          href="/"
          className="ml-2 flex items-center text-lg font-bold text-primary"
        >
          <HeartPulseIcon className="mr-2" />
          {m.home_metadata_title()}
        </Link>

        {/* Mobile Navigation */}
        <NavbarMobile />

        {/* Desktop Navigation */}
        <NavbarDesktop />
      </Container>
    </header>
  );
};
