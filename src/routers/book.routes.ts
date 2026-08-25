import { Router } from "express";
import books from "../controllers/books.controller.js";

const router = Router();

router.get("/", books.getBooks);
router.get("/:id", books.getBook);

export default router;