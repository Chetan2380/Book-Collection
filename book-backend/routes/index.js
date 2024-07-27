import { Router } from "express";
import BookRoutes from "../routes/book.routes.js"

const router = Router();

router.use("/book", BookRoutes);

export default router;