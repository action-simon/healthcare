"use client";

import * as m from "@/paraglide/messages";

import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import Container from "./Container";
import { Link } from "@/lib/i18n";
import cookie from "js-cookie";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="sticky bottom-0 left-0 z-50 border-t bg-background">
      <Container className="flex items-center justify-between py-4">
        <p
          className="mr-4 text-xs"
          dangerouslySetInnerHTML={{ __html: m.cookie_text() }}
        />
        <div className="flex items-center justify-between gap-x-2">
          <Button size={"sm"} variant={"outline"} onClick={handleReject}>
            {m.Block_all_cookies()}
          </Button>
          <Button size={"sm"} onClick={handleAccept}>
            {m.Accept_all()}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CookieConsentBanner;
