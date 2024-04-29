"use client";
import { usePathname, useRouter } from "@/lib/i18n";

import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ghost">
          <Languages />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: "en" })}
        >
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: "de" })}
        >
          🇩🇪 Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: "nl" })}
        >
          🇳🇱 Netherlands
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
