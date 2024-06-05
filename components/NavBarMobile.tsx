"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ModeToggle } from "@/components/ModeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { HeartPulseIcon, Languages, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex gap-x-4 lg:hidden">
      <ModeToggle />
      <LanguageSwitcher />

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="size-30 px-2" asChild>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setIsOpen(true)}
            aria-label="Menu"
          >
            <Menu />
            <span className="sr-only">Menu Icon</span>
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/"
                className="ml-2 flex items-center text-lg font-bold text-primary"
              >
                <HeartPulseIcon className="mr-2" />
                {m.home_metadata_title()}
              </Link>
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col items-center justify-center gap-4">
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className={`w-full ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.About_us()}
            </Link>
            <Link
              href="/#partners"
              onClick={() => setIsOpen(false)}
              className={`w-full ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Partners()}
            </Link>
            <Separator className="my-4 w-2/3" />
            <p className="text-xs font-bold">{m.Information_for_affected()}</p>
            <Link
              href="/palliative-care"
              onClick={() => setIsOpen(false)}
              className={`w-full ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Palliative_care()}
            </Link>
            <Link
              href="/dementia"
              onClick={() => setIsOpen(false)}
              className={`w-full ${buttonVariants({ variant: "ghost" })}`}
            >
              {m.Dementia()}
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`w-full border ${buttonVariants({ variant: "secondary" })}`}
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
  );
};

export default NavbarMobile;
