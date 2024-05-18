"use client";

import * as m from "@/paraglide/messages";

import { motion, useAnimation } from "framer-motion";

import Container from "@/components/Container";
import dementia from "@/public/astrid-schaffner-UcMQ55m8R1c-unsplash.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const DementiaPage = () => {
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
        <p className="text-sm font-bold uppercase text-primary md:text-base">
          Healthcare meetings
        </p>
        <h2 className="break-normal text-3xl font-bold md:text-5xl">
          {m.Dementia()}
        </h2>
      </div>

      <div
        className=" mx-auto mt-8 h-[60vh] w-full max-w-6xl rounded bg-background bg-cover"
        style={{ backgroundImage: `url(${dementia.src})` }}
      ></div>

      <div className=" mx-auto -mt-32 max-w-5xl ">
        <div className="mx-0 sm:mx-6">
          <motion.div
            ref={ref}
            className="w-full bg-background p-8 font-serif text-xl leading-normal text-foreground
              md:rounded md:p-20 md:text-2xl"
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
            <motion.p
              className="mb-5 text-2xl text-foreground md:text-3xl"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {m.moretext2_1()}
            </motion.p>
            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {m.moretext2_2()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_3()}
            </motion.p>

            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {m.moretext2_4()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_5()}
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              {m.moretext2_6()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_7()}
            </motion.p>

            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_8()}
            </motion.p>

            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_9()}
            </motion.p>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_10()}
            </motion.p>

            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              {m.moretext2_11()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_12()}
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              {m.moretext2_13()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_14()}
            </motion.p>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_15()}
            </motion.p>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.moretext2_16()}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default DementiaPage;
