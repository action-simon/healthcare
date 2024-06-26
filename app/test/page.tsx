"use client";

import * as m from "@/paraglide/messages";

import { motion, useAnimation } from "framer-motion";

import Container from "@/components/Container";
import palliativecare from "@/public/alisa-anton-u_z0X-yrJIE-unsplash.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TestPage = () => {
  const { ref, inView } = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <Container>
      <div className="pt-16 text-center">
        <p className="text-sm font-bold text-primary md:text-base">
          HEALTHCARE MEETINGS
        </p>
        <h2 className="break-normal text-3xl font-bold md:text-5xl">
          {m.Palliative_care()}
        </h2>
      </div>

      <div
        className="mx-auto mt-8 h-[60vh] w-full max-w-6xl rounded bg-background bg-cover"
        style={{ backgroundImage: `url(${palliativecare.src})` }}
      ></div>

      <div className="mx-auto -mt-32 max-w-5xl">
        <div className="mx-0 sm:mx-6">
          <motion.div
            ref={ref}
            className="prose dark:prose-invert w-full bg-background p-8 font-serif text-xl
              leading-normal text-foreground md:rounded md:p-20 md:text-2xl"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.3,
              ease: "easeIn",
            }}
          >
            <motion.blockquote
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              Test
            </motion.blockquote>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              Test Heading
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
             Test Text
            </motion.p>
           
          
            
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default PalliativePage;
