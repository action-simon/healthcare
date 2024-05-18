"use client";

import * as m from "@/paraglide/messages";

import { motion, useAnimation } from "framer-motion";

import Container from "@/components/Container";
import palliativecare from "@/public/robina-weermeijer-igwG8aIaypo-unsplash.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PalliativePage = () => {
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
        className=" mx-auto mt-8 h-[60vh] w-full max-w-6xl rounded bg-background bg-cover"
        style={{ backgroundImage: `url(${palliativecare.src})` }}
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

export default PalliativePage;
