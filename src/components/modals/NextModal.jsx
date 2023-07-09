import React from "react";

const NextModal = ({ nextModal, setNextModal }) => {
  return (
    <div>
      return (
      <div
        className="fixed z-50 top-0 left-0 overflow-x-hidden w-full backdrop-blur-sm h-screen flex items-center justify-center"
        onClick={(e) => e.target == e.currentTarget && setNextModal(!nextModal)}
      >
        <div className="border rounded-2xl w-8/12 p-1">
          <div className=" bg-white/80 rounded-2xl text-accent2/90 flex flex-col gap-y-6 p-6 font-primary font-semibold text-[18px] leading-[30px] lg:me-h3">
            <p>Technology: Next.js</p>
            <p>
              description: Pages Router, App Router, Layout, SSR, SSG,
              Middleware.
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default NextModal;
