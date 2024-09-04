import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../axiosconfig';
import '../styles/singlebook.css';

const SingleBook = () => {
    const { id } = useParams();
    const [singleBook, setSingleBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function fetchSingleBook() {
        setLoading(true);
        try {
            const response = await Api.post("/book/getsinglebook", { bookId: id });
            if (response.data.success) {
                setSingleBook(response.data.book);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchSingleBook();
        }
    }, [id]);

    return (
        <div className="single-book-container">
            {loading ? (
                <div className="loading-message">
                    <h1>Loading....</h1>
                </div>
            ) : (
                singleBook && (
                    <div className="book-details">
                        <h1 className="book-title">{singleBook.title}</h1>
                        <img className="book-image" src={singleBook.image} alt={singleBook.title} />
                        <p><b>{singleBook.author}</b></p>
                        <p><b>{singleBook.publishedYear}</b></p>
                        <p><b>{singleBook.genre}</b></p>
                        <p>{singleBook.summary}</p>
                        {singleBook.linktopdf && (
                            <a href={singleBook.linktopdf} target="_blank" rel="noopener noreferrer" className="pdf-link-button">
                                View PDF
                            </a>
                        )}
                    </div>
                )
            )}
        </div>
    );
}

export default SingleBook;