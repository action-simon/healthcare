"use client";

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
          Palliative care
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
              People who are incurably ill and their loved ones sooner or later
              encounter care in the last phase of their lives. Good palliative
              care is needed to give them the highest possible quality of life
              and to prevent and relieve suffering.
            </motion.p>
            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              Right care at the right time
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              The World Health Organisation (WHO) predicts that the number of
              people dying annually worldwide will rise from 51 million in 2015
              to 70 million in 2030. Due to improved diagnostics and treatment,
              people are living longer. People continue to live at home for
              longer and attention is being paid to the values, wishes and needs
              of patients and their loved ones. Their values, wishes and needs
              is what good palliative care is all about. We believe it is
              important that every citizen is assured of palliative care in the
              right place, at the right time and by the right healthcare
              providers. That is why we invest in optimising palliative care in
              physical, psychological, social and spiritual areas.
            </motion.p>
            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              What is palliative care?
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              Palliative care is care for patients and their loved ones dealing
              with a life-threatening condition or frailty. This care improves
              the quality of life by preventing and relieving suffering. Having
              an eye for problems of a physical, psychological, social and
              spiritual nature is central. Early detection and careful
              assessment and treatment of those problems is essential. More
              information can be found in the Quality Framework for Palliative
              Care Netherlands, which forms the basis for the organisation of
              palliative care in the Netherlands.
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              Healthcare innovations and quality
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              We focus on underpinning existing interventions around symptom
              management, driving the implementation of promising interventions
              and encouraging quality improvement through learning and
              improvement in practice. Read more about quality indicators and
              learning and improvement.
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              Organisation and continuity of care
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              We are committed to good cooperation and information transfer
              between parties involved in the care and support of patients in
              the palliative phase and their relatives. This mainly concerns
              transmural cooperation in 1st and 2nd line care, the connection
              with the social domain, the individual care plan and digital data
              exchange. Read more about cooperation and transfer.
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              Participation and support
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              There is a focus on supporting the patient, informal carer and
              carer. We also encourage research on how to support both in cases
              of overload, moral dilemmas and other issues. Read more about
              support care network.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default MoreText2;
