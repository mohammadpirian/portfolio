import React from "react";

const ReactModal = ({ reactModal, setReactModal }) => {
  return (
    <div>
      return (
      <div
        className="fixed z-50 top-0 left-0 overflow-x-hidden w-full backdrop-blur-sm h-screen flex items-center justify-center"
        onClick={(e) =>
          e.target == e.currentTarget && setReactModal(!ReactModal)
        }
      >
        <div className="border rounded-2xl w-8/12 p-1">
          <div className=" bg-white/80 rounded-2xl text-accent2/90 flex flex-col gap-y-6 p-6 font-primary font-semibold text-[18px] leading-[30px] lg:me-h3">
            <p>Technology: React.js</p>
            <p>
              description: JSX, TSX, Functional Component, Server Components,
              Hooks, Context API, Form Validations, Container Presentational,
              Component Architecture, Prop Types, Material-UI, Styled Component,
              CSS Modules, React DataTable, Redux, React Router, React Query
              ,React Dev Tools.
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default ReactModal;
