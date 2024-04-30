"use client";

import { HeartPulseIcon, Menu, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header
      className="sticky top-0 z-40 w-full overflow-x-hidden border-b-[1px] border-muted
        bg-background"
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-20 w-screen justify-between px-4 ">
          <NavigationMenuItem className="flex font-bold">
            <Link
              href="/"
              className="ml-2 flex items-center text-xl font-bold text-primary"
            >
              <HeartPulseIcon className="mr-2" />
              {m.home_metadata_title()}
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <nav className="flex lg:hidden">
            <LanguageSwitcher />
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex h-5 w-5 lg:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">Medical</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  <Link
                    href={m.concepthref()}
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {m.Concept()}
                  </Link>
                  <Link
                    href={m.keyinformationhref()}
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {m.Key_information()}
                  </Link>
                  <Link
                    href={m.participantshref()}
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {m.Participants()}
                  </Link>
                  <Link
                    href={m.partnershref()}
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {m.Partners()}
                  </Link>
                  <Link
                    href={m.galleryhref()}
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {m.Gallery()}
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`border ${buttonVariants({ variant: "secondary" })}`}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {m.Contact_us()}
                  </Link>
                </nav>
                <Separator className="my-4" />
                <nav className="mb-4 flex flex-row items-center justify-end gap-2">
                  <LanguageSwitcher />

                  <ModeToggle />
                </nav>
              </SheetContent>
            </Sheet>
          </nav>

          {/* desktop */}
          <nav className="hidden gap-2 lg:flex ">
            <Link
              href={m.concepthref()}
              onClick={() => setIsOpen(false)}
              className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Concept()}
            </Link>
            <Link
              href={m.keyinformationhref()}
              onClick={() => setIsOpen(false)}
              className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Key_information()}
            </Link>
            <Link
              href={m.participantshref()}
              onClick={() => setIsOpen(false)}
              className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Participants()}
            </Link>
            <Link
              href={m.partnershref()}
              onClick={() => setIsOpen(false)}
              className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Partners()}
            </Link>
            <Link
              href={m.galleryhref()}
              onClick={() => setIsOpen(false)}
              className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Gallery()}
            </Link>
          </nav>

          <div className="hidden gap-2 lg:flex">
            <Link href="/contact">
              <Button variant={"secondary"} className="border border-secondary">
                <MessageCircle className="mr-2 h-5 w-5" />
                {m.Contact_us()}
              </Button>
            </Link>
            <ModeToggle />

            <LanguageSwitcher />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
