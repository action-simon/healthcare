import { Middleware, Navigation, PrefixStrategy } from "@inlang/paraglide-next";

import type { AvailableLanguageTag } from "@/paraglide/runtime";

export const strategy = PrefixStrategy<AvailableLanguageTag>({
  prefixDefault: "always",
  pathnames: {
    "/palliative-care": {
      en: "/palliative-care",
      de: "/palliativpflege",
      nl: "/palliatieve-zorg",
    },
    "/dementia": {
      en: "/dementia",
      de: "/demenz",
      nl: "/dementie",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
      de: "/datenschutz",
      nl: "/gegevensbescherming",
    },
    "/contact": {
      en: "/contact",
      de: "/kontakt",
      nl: "/contact",
    },
    "/imprint": {
      en: "/imprint",
      de: "/impressum",
      nl: "/imprint",
    },
  },
});

export const middleware = Middleware({ strategy });

export const { Link, useRouter, usePathname, redirect, permanentRedirect } =
  Navigation({ strategy });
