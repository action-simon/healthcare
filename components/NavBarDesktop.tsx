"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ModeToggle } from "@/components/ModeToggle";
import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages";
import { HeartPulseIcon, MessageCircle } from "lucide-react";

const NavbarDesktop = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {m.About_us()}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
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
            <NavigationMenuItem>
              <Link href="/#partners" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {m.Partners()}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} dark:text-neutral border border-neutral-100
                  bg-neutral-100 hover:border-neutral-200 hover:bg-transparent
                  dark:border-neutral-800 dark:bg-neutral-800 dark:hover:border-neutral-700
                  dark:hover:bg-transparent`}
                >
                  <MessageCircle className="mr-2 size-5" /> {m.Contact_us()}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <LanguageSwitcher />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default NavbarDesktop;
