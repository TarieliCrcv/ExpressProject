import { Router } from "express";
import books from "../controllers/books.controller.js";

const router = Router();

router.get("/", books.getBooks);
router.get("/:id", books.getBook);
router.post("/", books.uploadBook);
router.patch("/", books.changeBook);
router.delete("/:id", books.deleteBook);

export default router;