"use client";

import { motion, useAnimation } from "framer-motion";

import Container from "../Container";
import tulips from "@/public/michael-denning-o1JbX7qxAl4-unsplash.jpg";
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
        <p className="text-sm font-bold uppercase text-primary md:text-base">
          Healthcare meetings
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
          Dementia
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
              Dementia is an umbrella term for over 50 diseases, of which
              Alzheimer's disease is the best known. In the Netherlands, 1 in 5
              people develop dementia. At ZonMw, we want to use knowledge and
              innovation to improve the quality of life for people with dementia
              and their loved ones.
            </motion.p>
            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              Types of dementia
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              The most common types of dementia are Alzheimer's disease,
              vascular dementia, frontotemporal dementia and Lewy body dementia.
              In the diseases, nerve cells in the brain are damaged, causing
              them to malfunction and reduce their ability to process
              information. This affects memory, body and mental health.
            </motion.p>

            <motion.h3
              className="pt-5 text-2xl font-bold"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              How does dementia occur?
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              Much is unknown about the processes that lead to dementia. There
              is also often no 1 cause that can be identified. We therefore fund
              research into the origin and mechanism of dementia. This includes
              further identifying and understanding how genes, nerve cells,
              glial cells and proteins work. Unravelling the mechanisms may also
              ultimately help treat, diagnose or prevent dementia. We fund the
              MODEM consortium that brings together parties to better understand
              the origins of dementia.
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              Better care, support and activities for people with dementia
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              It is important that people with dementia and their loved ones can
              participate in our society and have a good quality of life. With
              the right care, support and activities, they stay active, healthy
              and socially engaged for longer by staying in touch with others.
              We focus on care and support for people with dementia, through our
              research programmes from the medical and social domain.
            </motion.p>

            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              When a person is diagnosed with dementia, the palliative phase
              begins. This phase lasts between six and eight years on average.
              In order to know what the wishes and needs of a person with
              dementia are, it is important to have a timely conversation about
              this so that it can be recorded in good time. The estimated last
              three months of life in the palliative phase is called the
              terminal phase. Good cooperation between professionals involved is
              important to make the last phase of life as smooth as possible.
            </motion.p>

            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              Palliative care is an approach that improves the quality of life
              of patients and their loved ones dealing with a life-threatening
              condition by preventing and relieving suffering, through early
              detection and careful assessment and treatment of pain and other
              problems of a physical, psychosocial and spiritual nature.
            </motion.p>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              When the palliative phase starts, it is important to discuss
              wishes and needs about the last phase of life in a timely manner
              (advance care planning).
            </motion.p>

            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              On time in conversation
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              Due to the long period of palliative care, most healthcare
              professionals find it difficult to start right away. Yet it is
              important as a professional to start the conversation about this
              in time. This is advance care planning, where you identify the
              wishes and needs of a person with dementia so that you can provide
              better care.
            </motion.p>
            <motion.h3
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="pt-5 text-2xl font-bold"
            >
              Wishes and needs
            </motion.h3>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              Advance care planning is important in persons with dementia. When
              a person with dementia is in an advanced stage, they can no longer
              always articulate their wishes and needs. By starting the
              conversation early in the dementia process, people are even better
              able to express what they would like around the end of life. It
              also ensures that in acute situations what can be done is already
              decided, making the GP's job easier.
            </motion.p>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              An important part in palliative care is communication with the
              client. For palliative care, there are a number of topics you
              should pay attention to. With these, you can contribute to the
              client's quality of life.
            </motion.p>
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              className="py-6"
            >
              Communication in palliative care is vital because it helps to
              understand and respect the needs, wishes and concerns of patients
              and their families. Effective communication enables healthcare
              providers to put the patient at the centre of the care process,
              support them in making decisions, manage their pain and symptoms
              and improve their quality of life. It also helps build trust and
              provide emotional support to the patient and their loved ones
              during this difficult period. In short, good communication
              contributes to a better palliative care experience for all
              involved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default MoreText2;
