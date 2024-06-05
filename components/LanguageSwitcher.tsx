"use client";

import * as m from "@/paraglide/messages";

import {
  AvailableLanguageTag,
  availableLanguageTags,
} from "@/paraglide/runtime";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/lib/i18n";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useCallback } from "react";

const labels: Record<AvailableLanguageTag, string> = {
  en: "🇬🇧 English",
  de: "🇩🇪 Deutsch",
  nl: "🇳🇱 Nederlands",
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleItemClick = useCallback(
    (lang: AvailableLanguageTag) => () => {
      router.push(pathname, { locale: lang });
    },
    [router, pathname],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ghost">
          <Languages />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {availableLanguageTags.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={handleItemClick(lang)}
            aria-label={labels[lang]}
          >
            {labels[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
