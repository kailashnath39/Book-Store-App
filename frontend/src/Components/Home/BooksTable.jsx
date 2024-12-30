import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md";


const BooksTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-500 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Book</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Published Year</th>
                <th className='border border-slate-600 rounded-lg'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, ind) => (
                  <tr key={ind+1} >
                    <td className='border border-slate-600 rounded-md text-center'>{ind+1}</td>
                    <td className='border border-slate-600 rounded-md text-center'>{book.title}</td>
                    <td className='border border-slate-600 rounded-md max-md:hidden text-center'>{book.author}</td>
                    <td className='border border-slate-600 rounded-md max-md:hidden text-center'>{book.publishedYear}</td>
                    <td className='border border-slate-600 rounded-md text-center flex justify-center gap-2'>
                      <Link to={`/ShowBook/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-900'/>
                      </Link>
                      <Link to={`/EditBook/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-blue-900' />
                      </Link>
                      <Link to={`/DeleteBook/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-900'/>
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
  )
}

export default BooksTable;