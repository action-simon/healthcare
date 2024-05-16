"use client";

import * as m from "@/paraglide/messages";

import { Button } from "@/components/ui/button";
import Container from "../Container";
import Image from "next/image";
import { Link } from "@/lib/i18n";
import hero_image from "@/public/robina-weermeijer-igwG8aIaypo-unsplash.jpg";
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
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }} // Add easing here
            >
              <Image className="w-full rounded-lg" src={hero_image} alt="" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
