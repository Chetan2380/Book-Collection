import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    image:String,
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear : { type: Number, required: true } ,
    genre: { type: String, required: true },
    summary : String,
    linktopdf : { type: String, required: true }
});

const Book = model("Books", bookSchema);

export default Book;