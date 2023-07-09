import React from "react";

const OtherModal = ({ otherModal, setOtherModal }) => {
  return (
    <div>
      return (
      <div
        className="fixed z-50 top-0 left-0 overflow-x-hidden w-full backdrop-blur-sm h-screen flex items-center justify-center"
        onClick={(e) =>
          e.target == e.currentTarget && setOtherModal(!otherModal)
        }
      >
        <div className="border rounded-2xl w-8/12 p-1">
          <div className=" bg-white/80 rounded-2xl text-accent2/90 flex flex-col gap-y-6 p-6 font-primary font-semibold text-[18px] leading-[30px] lg:me-h3">
            <p>Technology: Html & Css</p>
            <p>
              description: HTML5, CSS3, RWD (Responsive Web Design), SASS, Form
              Validation, Semantic Tags, Flexbox, Media Queries, Animations,
              Bootstrap, Tailwind, Headless-ui.
            </p>
            <p>Tools:</p>
            <p>
              NPM, Yarn, Node, Git, Gitflow, PostMan, Figma, Adobe XD, Adobe
              PhotoShop, Mongo DB.
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default OtherModal;
