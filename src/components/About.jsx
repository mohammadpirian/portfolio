import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ContactModal from "./modals/ContactModal";

const About = () => {
  const [contactModal, setCotactModal] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className="section lg:mt-20 " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="font-primary text-[26px] mb-6 tracking-[10%] uppercase lg:h2 text-accent">
              About me.
            </h2>
            <h3 className="font-primary font-semibold text-[18px] mb-6 leading-[30px] lg:h3 mb-4">
              I'm a Front-End Developer with over 2 years of design experience.
            </h3>
            <p className="mb-6 leading-tight">
              I am an enthusiastic and skilled Frontend Developer ready to
              embark on a journey into the world of web development. With a
              solid understanding of web technologies, I possess a passion for
              creating captivating user experiences. My attention to detail and
              commitment to building visually stunning and responsive web
              applications drive me to excel in this field.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[26px] lg:text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp separator="" start={0} end={1997} duration={3} />
                  ) : null}
                </div>
                <div className="font-primary text-xs lg:text-sm tracking-[2px]">
                  Date of <br />
                  Birth
                </div>
              </div>
              <div>
                <div className="text-[26px] lg:text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-xs lg:text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[26px] lg:text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={400} duration={3} /> : null}
                  H+
                </div>
                <div className="font-primary text-xs lg:text-sm tracking-[2px]">
                  Bootcamp <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-sm lg:btn-lg" onClick={() => setCotactModal(true)}>Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {contactModal && <ContactModal contactModal={contactModal} setCotactModal={setCotactModal}/>}
    </section>
  );
};

export default About;
