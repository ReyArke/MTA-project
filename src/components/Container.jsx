import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full md:w-[800px] lg:w-[1280px] mx-auto  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
