import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BackButton from "../Components/BackButton";
import BooksCard from "../Components/Home/BooksCard";
import BooksTable from "../Components/Home/BooksTable";
import {useSnackbar} from "notistack"; 

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState("table");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data.data);
        // enqueueSnackbar("Books Retreved Sucessfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // enqueueSnackbar("Error! See Console");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <div className="flex justify-center gap-4 mb-4">
        <button
          className="px-3 py-2 rounded bg-blue-600 hover:bg-orange-600 text-white text-xl"
          onClick={() => setFormat("table")}
        >
          Table
        </button>
        <button
          className="px-3 py-2 rounded bg-blue-600 hover:bg-orange-600 text-white text-xl"
          onClick={() => setFormat("list")}
        >
          List
        </button>
      </div>
      <div className="flex justify-between items-center gap-x-4">
        <h1 className="text-3xl color-blue">Books List</h1>
        <Link to="/CreateBook/">
          <MdOutlineAddBox className="text-sky-900 text-5xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : format === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export { Home };
