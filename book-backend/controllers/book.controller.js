import Book from "../models/book.model.js";

export const GetAllBooks = async (req,res) =>{
    try {
      const books = await Book.find({});
      res.json({ success: true, books });
    } catch (error) {
      return res.json({ error, success: false });
    }
  };

export const AddBook = async (req, res) => {
    try {
      const { image,title, author, publishedYear, genre, summary } = req.body.bookData;
      if (!image || !title || !author || !publishedYear || !genre || !summary) {
        return res.json({ success: false, error: "All fields are required." });
      }
      const isTitleExist = await Book.findOne({ title: title });
      console.log(isTitleExist, "isTitleExist");
      if (isTitleExist) {
        return res.json({
          success: false,
          error: "Title is exists, please use another one.",
        });
      }
  
      const newBook = new Book({
        image:image,
        title: title,
        author: author,
        publishedYear: publishedYear,
        genre:genre,
        summary:summary
      });
  
      const responseFromDb = await newBook.save();
  
      return res.json({
        success: true,
        message: "Book added Successfull.",
      });
    } catch (error) {
      console.log(error, "error");
      return res.json({ error: error, success: false });
    }
  };

  export const GetSingleBook = async (req, res) => {
    try {
      const { bookId } = req.body;
      if (!bookId) {
        return res.json({ success: false, error: "Book id is required." });
      }
      const book = await Book.findById(bookId);
      res.json({ success: true, book });
    } catch (error) {
      return res.json({ error, success: false });
    }
  };