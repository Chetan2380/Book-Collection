import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Api from "../axiosconfig";
import toast from "react-hot-toast";
import '../styles/Addbook.css';

function AddBook() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
      image: "",
      title: "",
      author: "",
      publishedYear: "",
      genre: "",
      summary: "",
      linktopdf:""
  });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);

  const handleChange = (event) => {
      setBookData({ ...bookData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          if (bookData.image && bookData.title && bookData.author && bookData.publishedYear && bookData.genre && bookData.summary && bookData.linktopdf) {
              const response = await Api.post("/book/addbook", { bookData });
              if (response.data.success) {
                  setBookData({
                      image: "",
                      title: "",
                      author: "",
                      publishedYear: "",
                      genre: "",
                      summary: "",
                      linktopdf:""
                  });
                  navigate("/");
                  toast.success(response.data.message);
              }
          } else {
              toast.error("All fields are mandatory.");
          }
      } catch (error) {
          toast.error(error.response.data.error);
      }
  }

  useEffect(() => {
      const errorsArray = [];
      if (!bookData.image) errorsArray.push("Image is required.");
      if (!bookData.title) errorsArray.push("Title is required.");
      if (!bookData.author) errorsArray.push("Author is required.");
      if (!bookData.publishedYear) errorsArray.push("Published Year is required.");
      if (!bookData.genre) errorsArray.push("Genre is required.");
      if (!bookData.summary) errorsArray.push("Summary is required.");
      if (!bookData.linktopdf) errorsArray.push("Link to pdf is required.");

      setErrors(errorsArray);
      setDisable(errorsArray.length > 0);
  }, [bookData]);

  return (
      <div className="add-book-container">
          <form className="add-book-form" onSubmit={handleSubmit}>
              <h1 className="form-title">Add Book</h1>
              <label className="form-label">Image URL:</label>
              <input type="text" name="image" onChange={handleChange} value={bookData.image} className="form-input" />

              <label className="form-label">Title:</label>
              <input type="text" name="title" onChange={handleChange} value={bookData.title} className="form-input" />

              <label className="form-label">Author:</label>
              <input type="text" name="author" onChange={handleChange} value={bookData.author} className="form-input" />

              <label className="form-label">Published Year:</label>
              <input type="number" name="publishedYear" onChange={handleChange} value={bookData.publishedYear} className="form-input" />

              <label className="form-label">Genre:</label>
              <input type="text" name="genre" onChange={handleChange} value={bookData.genre} className="form-input" />

              <label className="form-label">Summary:</label>
              <textarea name="summary" onChange={handleChange} value={bookData.summary} className="form-textarea"></textarea>

              <label className="form-label">Link to PDF:</label>
              <input type="text" name="linktopdf" onChange={handleChange} value={bookData.linktopdf} className="form-input" />

              <button type="submit" className="submit-button">Add Book</button>
          </form>
      </div>
  );
}

export default AddBook;