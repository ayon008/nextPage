import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import SingleBook from "./singleBook";
import LoadSpinner from "./LoadSpinner";

const Books = () => {
  const { books } = useLoaderData();
  return (
    <div className="my-container">
      <div className="grid mb-8 lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {books.map((book) => (
          <SingleBook book={book} key={book.isbn13}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default Books;
