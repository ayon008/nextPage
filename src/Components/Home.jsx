import React from "react";
import Lottie from "lottie-react";
import education from "../assets/Animation - 1698694390869 (1).json";
import { Button, Link } from "react-daisyui";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto max-w-[95%] justify-between gap-16 mt-10">
      <div className="md:w-1/2 w-full">
        <small className="bg-yellow-400 px-3 font-semibold rounded-md">
          ON SALE!
        </small>
        <h1 className="md:text-4xl font-bold mt-3 text-3xl">
          A reader lives a thousand lives{" "}
          <span className="text-sky-400">before he dies</span>
        </h1>
        <p className="md:text-xl text-base my-5">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <Button
            onClick={() => navigate("/books")}
            className="text-white font-semibold bg-sky-400"
          >
            View Store <ShoppingCartIcon className="h-6 w-6 text-white" />
          </Button>
          <button onClick={() => navigate("/about")} className="font-semibold">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <Lottie
          className="w-full h-auto"
          animationData={education}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Home;
