"use client";

import * as m from "@/paraglide/messages";

import { Button } from "@/components/ui/button";
import Container from "../Container";
import Image from "next/image";
import { Link } from "@/lib/i18n";
import hero_image from "@/public/hero-img.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }} // Add easing here
              className="text-base font-semibold uppercase tracking-wider text-blue-600"
            >
              {m.home_metadata_title()}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }} // Add easing here
              className="mt-4 text-xl font-bold text-foreground sm:text-2xl lg:mt-8 xl:text-4xl"
            >
              {m.home_headline()}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }} // Add easing here
              className="mt-4 text-base text-muted-foreground sm:text-xl lg:mt-8"
            >
              {m.home_headline_sub()}
            </motion.p>
            <Link href="#">
              <Button
                size={"lg"}
                className="mt-8 inline-flex h-12 items-center rounded-full px-6 py-4 font-semibold lg:mt-16"
              >
                {m.Read_more()}
                <svg
                  className="-mr-2 ml-8 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Button>
            </Link>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }} // Add easing here
            >
              <Image className="w-full" src={hero_image} alt="" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
