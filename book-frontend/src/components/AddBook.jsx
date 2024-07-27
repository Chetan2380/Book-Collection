import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Api from "../axiosconfig";
import toast from "react-hot-toast";
import '../styles/Addbook.css';

function AddBook(){
    const router=useNavigate();
    const[bookData, setBookData]=useState({
        image:"",
        title:"",
        author:"",
        publishedYear:"",
        genre:"",
        summary:""
    });
    const [errors, setErrors] = useState([]);
    const [disable, setDisable] = useState(true);
    console.log(bookData,"bookData");
    function handleChange(event){
        setBookData({ ...bookData, [event.target.name]: event.target.value});
    }
    async function handleSubmit(e){
        e.preventDefault();
        try {
            if(bookData.image && bookData.title && bookData.author && bookData.publishedYear && bookData.genre && bookData.summary){
                const response = await Api.post("/book/addbook" , {bookData});
                if(response.data.success){
                    setBookData({
                        image:"",
                        title:"",
                        author:"",
                        publishedYear:"",
                        genre:"",
                        summary:""
                    });
                    router("/");
                    toast.success(response.data.message);
                }
            }else{
                toast.error("All fields are mandatory.");
            }
        } catch (error) {
            // error =  { data : { success : false, message : "All fields are mandatory."}}
            toast.error(error.response.data.error);
        }
    }

    useEffect(() => {
        const errorsArray = [];
        if (!bookData.image) {
          errorsArray.push("Image is required.");
        }
        if (!bookData.title) {
          errorsArray.push("Title is required.");
        }
        if (!bookData.author) {
          errorsArray.push("Author is required.");
        }
        if (!bookData.publishedYear) {
          errorsArray.push("Published Year is required.");
        }
        if (!bookData.genre) {
          errorsArray.push("Genre is required.");
        }
        if (!bookData.summary) {
          errorsArray.push("Summary is required.");
        }
        setErrors(errorsArray);
        if (errorsArray.length == 0) {
          setDisable(false);
        } else {
          setDisable(true);
        }
      }, [bookData]);

  return (
    <div id="ab-main">
        <form onSubmit={handleSubmit}>
            <h1>Add Book</h1>
            <label>Image Url:</label><br/>
            <input type='text' name='image' onChange={handleChange} value={bookData.image}/><br/>
            <label>Title:</label><br/>
            <input type='text' name='title' onChange={handleChange} value={bookData.title}/><br/>
            <label>Author:</label><br/>
            <input type='text' name='author' onChange={handleChange} value={bookData.author}/><br/>
            <label>Published Year:</label><br/>
            <input type='number' name='publishedYear' onChange={handleChange} value={bookData.publishedYear}/><br/>
            <label>Genre:</label><br/>
            <input type='text' name='genre' onChange={handleChange} value={bookData.genre}/><br/>
            <label>Summary:</label><br/>
            <textarea name='summary' onChange={handleChange} value={bookData.summary}></textarea><br/>
            <input type='submit' value="ADD BOOK" />
        </form>
    </div>
  )
}

export default AddBook;