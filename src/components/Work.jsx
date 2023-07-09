import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "./../variants";
import Img1 from "../assets/portfolio-img4.png";
import Img2 from "../assets/portfolio-img5.png";
import Img3 from "../assets/portfolio-img6.png";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Explore my web projects, featuring diverse designs and
                functionalities, showcasing my skills in web development and
                design.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-20 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20">
                <span className=" text-gradient">Zak Store</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-20">
                <span className="text-3xl text-white">Project Title</span>
                <div className="flex gap-2">
                  <a href="https://github.com/mohammadpiriyan/ZakStore">
                    <FaGithub />
                  </a>
                  <a href="https://zakstore.vercel.app/">
                    <TbWorldWww />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-20 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20">
                <span className=" text-gradient">Shoea Shop</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-20">
                <span className="text-3xl text-white">Project Title</span>
                <a href="https://github.com/mohammadpiriyan/Shoea-app">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-20 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20">
                <span className=" text-gradient">Ari Movie</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-20">
                <span className="text-3xl text-white">Project Title</span>
                <a href="https://github.com/mohammadpiriyan/AriMovie">
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
