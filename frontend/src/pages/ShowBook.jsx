import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from "../Components/Spinner";
import  BackButton  from '../Components/BackButton';

const ShowBook = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({});
  const {id} = useParams();
  
  useEffect(() => {
    axios
    .get(`http://localhost:3000/books/${id}`).then((req) => {
      setBook(req.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error.message);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {
        loading ? <Spinner /> : (
          <>
          <div className='p-4'><BackButton /></div>
          <div className='text-2xl p-4'>Book Details</div>
          <div className='w-fit flex flex-col border border-blue-700 rounded-lg p-8 m-8 justify-between items-start gap-4 mt-10'>
          
            <div className=' py-2'>
              <span className='text-xl font-semibold'>Id: </span> 
              {book._id}
            </div>

            <div className=' py-2'>
              <span className='text-xl font-semibold'>Title: </span> 
              {book.title}
            </div>

            <div className=' py-2'>
              <span className='text-xl font-semibold'>Author: </span> 
              {book.author}
            </div>

            <div className=' py-2'>
              <span className='text-xl font-semibold'>Published Year: </span> 
              {book.publishedYear}
            </div>

            <div className=' py-2'>
              <span className='text-xl font-semibold'>Created Date: </span> 
              {new Date(book.createdAt).getFullYear()}
            </div>
{/* 
            <div className=' py-2'>
              <span className='text-xl font-semibold'>Book Note: </span> 
              {book.noteContent}
            </div> */}

          </div>
        </>
        )
      }
    </>
  )
}

export { ShowBook};