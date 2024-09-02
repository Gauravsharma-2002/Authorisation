import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "*", // replace it with process env
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// for routes declaration

export { app };
