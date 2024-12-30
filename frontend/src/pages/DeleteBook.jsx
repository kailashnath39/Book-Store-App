import React, { useState } from 'react';
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import Spinner from '../Components/Spinner';
import BackButton from '../Components/BackButton';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const DeleteBook = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/books/${id}`).then(
      (res) => {
        setLoading(false);
        // console.log(res.data);
        enqueueSnackbar("Book Deleted Successfully", { variant : "success"});
        navigate("/");
      }
    ).catch(
      (err) => {
        setLoading(false);
        // alert("some error has occured");
        enqueueSnackbar("Book Deletion Failed. See Console!", { variant : "error"});
  
        console.log(err);
      }
    );
  }
  
  return (
    <>
    <div className='p-4'><BackButton /></div>
    {loading ? <Spinner /> : ''}
    <div className='p-8 flex flex-col justify-between gap-4 mx-auto items-center border border-blue-500 w-fit rounded-lg'>
      <label className='text-xl py-4'>Are you sure you want to delete this book</label>
      <button className='bg-red-500 text-white w-fit rounded p-2' onClick={handleDelete}>Delete It</button>
    </div>

    </>
  );
}

export default DeleteBook;