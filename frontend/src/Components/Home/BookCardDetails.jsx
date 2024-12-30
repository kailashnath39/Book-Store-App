import React from 'react';
import { IoMdClose } from 'react-icons/io';


const BookCardDetails = ({book, onClose}) => {
  return (
    <div className='absolute z-50 w-[500px] h-[300px] max-w-full bg-black bg-opacity-60 flex justify-center items-center'>
        <div className='rounded-lg bg-red-100 w-full h-full'>
            <IoMdClose className='top-6 right-6 text-2xl' onClick={onClose}/>
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
            <p>
                Some details of this book should be entered
            </p>
        </div>
    </div>
  )
}

export default BookCardDetails;