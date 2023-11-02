import React, { useState } from "react";
import { Button } from "react-daisyui";
import { useLoaderData, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const [fold, setFold] = useState(true);
  return (
    <div className="md:h-screen">
      <div className="h-full md:mt-0 mt-10 flex items-center justify-center md:w-3/4 w-[90%] mx-auto">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-10 w-full border p-4">
          <div className="">
            <img src={data.image} className="object-cover" alt="" />
          </div>
          <div className="mt-10 flex-1">
            <small className="bg-yellow-400 px-3 font-bold rounded-md">
              Brand New
            </small>
            <h1 className="md:text-4xl font-bold mt-3 text-3xl">
              {data.title}
            </h1>
            <div className="font-semibold text-sm mt-4 mb-3">
              <p>Author: {data.authors}</p>
              <p>Publisher: {data.publisher}</p>
              <p>Year: {data.year}</p>
              <p>Rating: {data.rating}</p>
            </div>

            {fold ? (
              <p>
                {data.desc.slice(0, 100)}...
                <span>
                  <button
                    onClick={() => setFold(!fold)}
                    className="text-blue-500"
                  >
                    Read More
                  </button>
                </span>
              </p>
            ) : (
              <p>
                {data.desc}
                <span>
                  <button
                    onClick={() => setFold(!fold)}
                    className="text-blue-500"
                  >
                    Read less
                  </button>
                </span>
              </p>
            )}
            <div className="mt-5">
              <Button className="bg-sky-400 text-white me-5">
                <a href={data.url}>Buy Now</a>
              </Button>
              <button className="font-bold">Price: {data.price}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
