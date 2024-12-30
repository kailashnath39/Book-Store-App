import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import BackButton from "../Components/BackButton";
import { enqueueSnackbar, useSnackbar } from 'notistack';


function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState();
  const [loading, setLoading] = useState(false);
  const [noteContent, setNoteContent] = useState("No note added yet");
  const navigate = useNavigate();

  function handleSave(){
    const book = {
      title,
      author,
      publishedYear,
      noteContent
    };
    console.log(book);
    axios.post("http://localhost:3000/books", book)
  .then((data) => {
    console.log(data);
    setLoading(false);
    // console.log("The data is saved");
    enqueueSnackbar("Book Created Successfully", { variant: "success"});

    navigate("/");
  })
  .catch((error) => {
    setLoading(false); 
    // alert("An error has occurred. See the console for details.");
    enqueueSnackbar("Book Creation Failed. See console!", { variant: "error"});
    console.log(error);
  });
  }



  return (
    
    loading ? <Spinner /> : (
      <>
      <div className='p-4'><BackButton /></div>
      <div className='text-2xl p-4'>Create Book</div>
      <div className='p-8 flex flex-col gap-8 mx-auto border border-blue-500 w-[50%] rounded-lg'>
        
      <div>
        <label className='font-semibold text-xl'>Title: </label><br />
        <input type="text" 
        value={title}
        onChange={(e) => {setTitle(e.target.value)}}
        className='border-2 border-black-300 w-full p-2'/>
      </div>

      <div>
        <label className='font-semibold text-xl'>Author: </label><br />
        <input type="text" 
        value={author}
        onChange={(e) => {setAuthor(e.target.value)}}
        className='border-2 border-black-300 w-full p-2'/>
      </div>

      <div>
        <label className='font-semibold text-xl'>Published Year: </label><br />
        <input type="text" 
        value={publishedYear}
        onChange={(e) => {setPublishedYear(e.target.value)}}
        className='border-2 border-black-300 w-full p-2'/>
      </div>
{/*       
      <div>
        <label className='font-semibold text-xl'>Note: </label><br />
        <input type="text" 
        value={noteContent}
        onChange={(e) => {setNoteContent(e.target.value)}}
        className='border-2 border-black-300 w-full p-2'/>
      </div> */}

      <div className="flex justify-center">  {/* Centering the button */}
    <button onClick={handleSave} className='text-white text-xl bg-green-500 rounded px-4 py-2'>Save</button>
  </div>
    </div>
    </>
    )
  )
}

export default CreateBook;