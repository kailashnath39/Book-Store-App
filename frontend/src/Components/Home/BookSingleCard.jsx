import React from "react";
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import {BiShow} from "react-icons/bi";
import { useState } from "react";

const BookSingleCard = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <div className="flex items-center justify-start">
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
          {book.publishedYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
      </div>
      <div className="flex flex-col justify-between p-2 my-2 gap-4">
        <div className="flex justify-start gap-x-2">
          <LuBookOpenText className="text-2xl text-green-500" />
          <span>{book.title}</span>
        </div>
        <div className="flex justify-start gap-x-2">
          <IoMdPerson className="text-2xl text-blue-500" />
          <span>{book.author}</span>
        </div>
      </div>
      <div className="flex justify-between p-4">
        
        <Link to={`/ShowBook/${book._id}`}>
          <FaEye className="text-2xl text-black-500" />
        </Link>
        <Link to={`/EditBook/${book._id}`}>
          <MdEdit className="text-2xl text-black-500" />
        </Link>
        <Link to={`/DeleteBook/${book._id}`}>
          <MdDelete className="text-2xl text-black-500" />
        </Link>
        {
            showDetails && (<BookSingleCard book={book} onClose={() => setShowDetails(false)}/>)
        }
      </div>
    </div>
  );
};

export default BookSingleCard;
