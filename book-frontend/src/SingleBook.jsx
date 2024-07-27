import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Api from './axiosconfig';
import './Booklist.css';

const SingleBook = () => {
    const {id}=useParams();
    const[allBooks,setAllBooks]=useState([]);
    const [loading, setLoading] = useState(false);
    console.log(allBooks);
    const router = useNavigate();

    async function GetBook(){
        setLoading(true);
        try{
            const response = await Api.get("/book/getsinglebook")
            console.log(response)
            if(response.data.success){
                setLoading(false);
                setAllBooks(response.data.books);
            } 
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        GetBook()},[]);

    return(
        <div id="main">
            <h1>All Books</h1>
                {loading?(<div>
                    <h1>Loading....</h1>                    
                </div>):(
                    <div id="allbooksshow">
                    {allBooks.map((book)=>(
                        <div id="bookshow">
                            <img src={book.image}/>
                            <p><b>Title</b>: {book.title}</p>
                            <p><b>Author</b>: {book.author}</p>
                            <p><b>Published Year</b>: ₹{book.publishedYear}</p>
                            <p><b>Genre</b>: {book.genre}</p>
                            <p><b>Summary</b>: {book.summary}</p>
                        </div>
                    ))}
                </div>
                )} 
                <button onClick={()=>router("/add-book")}>Add More Books</button>
        </div>
    );
}

export default SingleBook;