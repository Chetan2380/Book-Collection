import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../axiosconfig';
import '../styles/singlebook.css';

const SingleBook = () => {
    const {id}=useParams();
    const[singlebook,setSinglebook]=useState([]);
    const [loading, setLoading] = useState(false);
    console.log(singlebook);
    const router = useNavigate();

    async function GetSingleBook(){
        setLoading(true);
        try{
            const response = await Api.post("/book/getsinglebook",{bookId: id});
            console.log(response)
            if(response.data.success){
                setLoading(false);
                setSinglebook([response.data.book]);
            } 
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(id){
            GetSingleBook();
        }
       },[id]);

    return(
        <div id="main">
                {loading?(<div>
                    <h1>Loading....</h1>                    
                </div>):(
                    <div id="allbooksshow">
                    {singlebook.map((book)=>(
                        <div id="sb-bookshow">
                            <p><b>{book.title}</b></p>
                            <img src={book.image}/>
                            <p><b>Author</b>: {book.author}</p>
                            <p><b>Published Year</b>: {book.publishedYear}</p>
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