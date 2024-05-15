"use client";

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
        <p className="mr-4 text-xs">
          We use our own cookies as well as third-party cookies on our websites
          to enhance your experience, analyze our traffic, and for security and
          marketing. Select "Accept All" to allow them to be used. Read our
          <Link href="privacy-policy">Cookie Policy</Link>.
        </p>
        <div className="flex items-center justify-between gap-x-2">
          <Button size={"sm"} variant={"outline"} onClick={handleAccept}>
            Block all cookies
          </Button>
          <Button size={"sm"} onClick={handleReject}>
            Accept all
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CookieConsentBanner;
