import React from "react";

const LoadSpinner = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="flex items-center">
        <span className="text-7xl font-thin">L</span>
        <div className="border-8 border-sky-400 rounded-full w-10 h-10 border-dashed mt-5 animate-spin"></div>
        <span className="text-7xl font-thin">ding...</span>
      </div>
    </div>
  );
};

export default LoadSpinner;
