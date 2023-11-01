import React from "react";
import { useNavigate } from "react-router-dom";

const SingleBook = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/${book.isbn13}`)}>
      <div className="relative transition duration-200 transform hover:translate-y-2 shadow-lg rounded-md">
        <img
          className="object-cover w-full h-56 md:h-64 lg:h-80"
          src={book.image}
          alt=""
        />
        <div className="font-bold px-6 py-4 bg-black bg-opacity-75 text-gray-300 absolute inset-0 opacity-0 transition duration-300 hover:opacity-100 rounded-md flex flex-col">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle.slice(0, 50)}...</p>
          <br />
          <p className="mt-auto">{book.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
