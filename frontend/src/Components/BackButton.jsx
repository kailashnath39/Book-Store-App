import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const BackButton = ({destination = "/"}) => {
  return (
    <Link to={destination} >
        <IoArrowBackSharp className='w-12 h-8 rounded-lg bg-green-500 hover:shadow transition-shadow duration-200'/>
    </Link>
  )
}

export default BackButton;