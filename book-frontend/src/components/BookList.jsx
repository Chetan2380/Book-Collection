import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../axiosconfig";
import '../styles/Booklist.css';

function Booklist() {
    const navigate = useNavigate();
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchBooks() {
        setLoading(true);
        try {
            const response = await Api.get("/book/getallbook");
            if (response.data.success) {
                setAllBooks(response.data.books);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="booklist-container">
            <h1 className="booklist-title">All Books</h1>
            {loading ? (
                <div className="loading-message">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="book-list">
                    {allBooks.map((book) => (
                        <div
                            key={book._id}
                            className="book-item"
                            onClick={() => navigate(`/singlebook/${book._id}`)}
                        >
                            <img src={book.image} alt={book.title} />
                            <p><b>{book.title}</b></p>
                            <p>Author : {book.author}</p>
                            <p>Year : {book.publishedYear}</p>
                        </div>
                    ))}
                </div>
            )}
            <button
                className="add-book-button"
                onClick={() => navigate("/add-book")}
            >
                Add More Books
            </button>
        </div>
    );
}

export default Booklist;