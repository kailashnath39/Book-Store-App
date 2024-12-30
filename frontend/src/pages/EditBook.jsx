import {React, useState, useEffect} from 'react';
import  BackButton  from '../Components/BackButton';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import { useSnackbar } from 'notistack';


function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`).then(
      (res) => {
        setLoading(false);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishedYear(res.data.publishedYear);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }, []);
  

  function handleEdit() {
    const book = {
      title,
      author,
      publishedYear
    };
    // console.log(book);
    axios.put(`http://localhost:3000/books/${id}`, book)
  .then(() => {
    // console.log(data);
    setLoading(false);
    // console.log("The data is edited");
    enqueueSnackbar('Book edited successfully', { variant: 'success' });
    navigate("/");
  })
  .catch((error) => {
    setLoading(false); 
    // alert("An error has occurred. See the console for details.");
    enqueueSnackbar("Book Edition Failed. See console!", { varient: 'failure'});
    console.log(error);
  });
  }



  return (
    
    loading ? <Spinner /> : (
      <>
      <div className='p-4'><BackButton /></div>
      <div className='text-2xl p-4'>Edit Book</div>
      <div className='p-8 flex flex-col gap-8 mx-auto border border-blue-500 w-[50%] rounded-lg'>
        
      <div>
        <label className='font-semibold text-xl'>Title: </label><br />
        <input type="text" 
        value={title}
        onChange={(e) => {setTitle(e.target.value)}}
        className='border-2 border-black-300 w-full'/>
      </div>

      <div>
        <label className='font-semibold text-xl'>Author: </label><br />
        <input type="text" 
        value={author}
        onChange={(e) => {setAuthor(e.target.value)}}
        className='border-2 border-black-300 w-full'/>
      </div>

      <div>
        <label className='font-semibold text-xl'>Published Year: </label><br />
        <input type="text" 
        value={publishedYear}
        onChange={(e) => {setPublishedYear(e.target.value)}}
        className='border-2 border-black-300 w-full'/>
      </div>
      
      

      <div className="flex justify-center"> 
    <button onClick={handleEdit} className='text-white text-xl bg-green-500 rounded px-4 py-2'>Edit</button>
  </div>
    </div>
    </>
    )
  )
}

export default EditBook;