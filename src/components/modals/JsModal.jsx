import React from "react";

const JsModal = ({ jsModal, setJsModal }) => {
  return (
    <div>
      return (
      <div
        className="fixed z-50 top-0 left-0 overflow-x-hidden w-full backdrop-blur-sm h-screen flex items-center justify-center"
        onClick={(e) => e.target == e.currentTarget && setJsModal(!jsModal)}
      >
        <div className="border rounded-2xl w-8/12 p-1">
          <div className=" bg-white/80 rounded-2xl text-accent2/90 flex flex-col gap-y-6 p-6 font-primary font-semibold text-[18px] leading-[30px] lg:me-h3">
            <p>Technology: JavaScript</p>
            <p>
              ES6, Async Programming, OOP in JS, FP in JS, Pure JS SPA, DOM
              Manipulation, Functions, Events, Forms, Promises, async/await,
              jQuery, Error Handling, Date & Time.
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default JsModal;
