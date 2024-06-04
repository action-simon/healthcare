"use client";

import * as m from "@/paraglide/messages";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { HeartPulseIcon, Menu, MessageCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import Container from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "@/lib/i18n";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "@/components/ui/separator";

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
    <header className="sticky inset-0 z-20 h-20 w-full border-b-[1px] border-muted bg-background">
      <Container className="flex h-20 items-center justify-between py-0">
        <Link
          href="/"
          className="ml-2 flex items-center text-lg font-bold text-primary"
        >
          <HeartPulseIcon className="mr-2" />
          {m.home_metadata_title()}
        </Link>
        <nav className="flex gap-x-4 lg:hidden">
          <ModeToggle />
          <LanguageSwitcher />

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
                <SheetTitle className="text-lg font-bold">
                  {m.home_metadata_title()}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col items-center justify-center gap-4">
                <Separator className="my-4 w-2/3" />
                <Link
                  href="/#about"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {m.About_us()}
                </Link>
                <Link
                  href="/#partners"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {m.Partners()}
                </Link>
                <Separator className="my-4 w-2/3" />
                <h3 className="text-xs font-bold">
                  {m.Information_for_affected()}
                </h3>
                <Link
                  href="/palliative-care"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {m.Palliative_care()}
                </Link>
                <Link
                  href="/dementia"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {m.Dementia()}
                </Link>
                <Separator className="my-4 w-2/3" />

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

        <nav className="hidden flex-row justify-between gap-x-2 lg:flex">
          <Link
            href="/#about"
            className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
          >
            {m.About_us()}
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {m.Information_for_affected()}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b
                            from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            <Link
                              href="/"
                              className="flex items-center justify-center text-xs font-bold text-primary"
                            >
                              <HeartPulseIcon className="mr-2" />
                              {m.home_metadata_title()}
                            </Link>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link
                        href="/palliative-care"
                        title={m.Palliative_care()}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
                      >
                        {m.Palliative_care()}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dementia"
                        title={m.Dementia()}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
                      >
                        {m.Dementia()}
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/#partners"
            className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
          >
            {m.Partners()}
          </Link>
        </nav>

        <div className="hidden gap-x-2 lg:flex">
          <Link href="/contact">
            <Button variant={"secondary"} className="border border-secondary">
              <MessageCircle className="mr-2 h-5 w-5" />
              {m.Contact_us()}
            </Button>
          </Link>
          <ModeToggle />

          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
};
