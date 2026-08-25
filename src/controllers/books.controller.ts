import { type Request, type Response } from "express";
import { books } from "../books.js";

export const getBooks = (req: Request, res: Response) => {
  res.json(books);
};

export const getBook = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.json(book);
};

export default {
  getBooks,
  getBook,
};
