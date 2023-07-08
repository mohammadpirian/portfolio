import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import NextModal from "./modals/NextModal";

const services = [
  {
    name: "Next-JS",
    description: "Pages Router, App Router, Layout, SSR, SSG, Middleware.",
    link: "learn more",
    modal: "next",
  },
  {
    name: "React-JS",
    description:
      "JSX, TSX, Functional Component, Server Components, Hooks, Context API, Form Validations, Container Presentational.",
    modaldescription:
      "JSX, TSX, Functional Component, Server Components, Hooks, Context API, Form Validations, Container Presentational, Component Architecture, Prop Types, Material-UI, Styled Component, CSS Modules, React DataTable, Redux, React Router, React Query ,React Dev Tools.",
    link: "learn more",
    modal: "react",
  },
  {
    name: "TypeScript",
    description: "Type, Interface, Class, Generic.",
    modaldescription: "Type, Interface, Class, Generic.",
    link: "learn more",
    modal: "ts",
  },
  {
    name: "JavaScript",
    description:
      "ES6, Async Programming, OOP in JS, FP in JS, Pure JS SPA, DOM Manipulation, Functions, Events, Forms, Promises.",
    modaldescription:
      "ES6, Async Programming, OOP in JS, FP in JS, Pure JS SPA, DOM Manipulation, Functions, Events, Forms, Promises, async/await, jQuery, Error Handling, Date & Time.",
    link: "learn more",
    modal: "js",
  },
  // {
  //   name: "HTML & CSS",
  //   description:
  //     "HTML5, CSS3, RWD (Responsive Web Design), SASS, Form Validation, Semantic Tags, Flexbox, Media Queries, Animations, Bootstrap, Tailwind, Headless-ui.",
  //   link: "learn more",
  // },
  // {
  //   name: "Tools",
  //   description:
  //     "NPM, Yarn, Node, Git, Gitflow, PostMan, Figma, Adobe XD, Adobe PhotoShop, Mongo DB.",
  //   link: "learn more",
  // },
];

const Services = () => {
  const [nextModal, setNextModal] = useState(false);
  const [reactModal, setReactModal] = useState(false);
  const [tsModal, setTsModal] = useState(false);
  const [jsModal, setJsModal] = useState(false);
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">skills & abilities.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Showcasing my programming skills: languages, technologies, and
              tools.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              const { name, description, link, modal, modaldescription } =
                service;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      href="#"
                      onClick={() => {
                        switch (modal) {
                          case "next":
                            setNextModal(true);
                          case "react":
                            setReactModal(true);
                          case "ts":
                            setTsModal(true);
                          case "js":
                            setJsModal(true);
                        }
                      }}
                    >
                      <BsArrowUpRight />
                    </a>
                    <a className="text-gradient text-sm" href="#">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {nextModal && (
        <NextModal setNextModal={setNextModal} nextModal={nextModal} />
      )}
    </section>
  );
};

export default Services;
