"use client";

import * as m from "@/paraglide/messages";

import { Button, buttonVariants } from "@/components/ui/button";
import { HeartPulseIcon, Menu, MessageCircle } from "lucide-react";
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
                <SheetTitle className=" text-lg font-bold">
                  {m.home_metadata_title()}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col items-center justify-center gap-4">
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
                <Link
                  href="/#about"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Über uns
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

        <nav className="hidden flex-row justify-between gap-x-2 lg:flex">
          <Link
            href="/palliative-care"
            className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
          >
            {m.Palliative_care()}
          </Link>
          <Link
            href="/dementia"
            onClick={() => setIsOpen(false)}
            className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
          >
            {m.Dementia()}
          </Link>
          <Link
            href="/#about"
            className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
          >
            Über uns
          </Link>
          <Link
            href={m.partnershref()}
            className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
          >
            {m.Partners()}
          </Link>
          <Link
            href={m.galleryhref()}
            className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
          >
            {m.Gallery()}
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
