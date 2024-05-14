"use client";

import * as m from "@/paraglide/messages";

import { motion, useAnimation } from "framer-motion";

import Container from "../Container";
import tulips from "@/public/krystina-rogers-5aXEo-hGwU0-unsplash.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MoreText2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container>
      <div className="pt-16 text-center md:pt-32">
        <p className="text-sm font-bold text-primary md:text-base">
          HEALTHCARE MEETINGS
        </p>
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="break-normal text-3xl font-bold md:text-5xl"
        >
          {m.Palliative_care()}
        </motion.h2>
      </div>

      <div
        className=" mx-auto mt-8 h-[60vh] w-full max-w-6xl rounded bg-background bg-cover"
        style={{ backgroundImage: `url(${tulips.src})` }}
      ></div>

      <div className=" mx-auto -mt-32 max-w-5xl ">
        <div className="mx-0 sm:mx-6">
          <motion.div
            ref={ref}
            className="w-full rounded bg-background p-8 font-serif text-xl leading-normal
              text-foreground md:p-20 md:text-2xl"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.5, staggerChildren: 0.4 }}
          >
            <motion.p
              className="mb-5 text-2xl text-foreground md:text-3xl"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {m.more_text_1()}
            </motion.p>
            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {m.more_text_2()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.more_text_3()}
            </motion.p>
            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {m.more_text_4()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.more_text_5()}
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              {m.more_text_6()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.more_text_7()}
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              {m.more_text_8()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.more_text_9()}
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              {m.more_text_10()}
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              {m.more_text_11()}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default MoreText2;
