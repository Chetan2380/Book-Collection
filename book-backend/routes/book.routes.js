import { Router } from "express";
import { AddBook, GetAllBooks, GetSingleBook } from "../controllers/book.controller.js";

const router = Router();
router.get("/getsinglebook",GetSingleBook);
router.get("/getallbook",GetAllBooks);
router.post("/addbook",AddBook);

export default router;