import express, { type Express } from "express";
import booksRouter from "./routers/book.routes.js";
import { logger } from "./middlewares/logger.middleware.js";

const app: Express = express();

app.use(express.json());
app.use(logger);

app.get("/", (req,res)=>{res.json("hello this is books api for testing")})
app.use("/books", booksRouter);

export default app;