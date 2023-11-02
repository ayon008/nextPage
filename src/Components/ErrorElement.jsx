import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimations from "../../src/assets/Animation - 1698905735384.json";
import { Button } from "react-daisyui";

const ErrorElement = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (
    <div className="h-screen flex flex-col">
      <div className="m-auto">
        <Lottie
          className="h-[60%]"
          animationData={errorAnimations}
          loop={true}
        />
        <div className="text-center">
          <h1 className="text-red-950 font-semibold text-3xl">
            {error.error.message}
          </h1>
          <Button
            onClick={() => navigate("/")}
            className="mt-5 bg-sky-400 text-white font-semibold "
          >
            Back To Home page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
