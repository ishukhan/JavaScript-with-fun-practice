import express from "express";
import cors from "cors";
import cookiesParse from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// middlew
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookiesParse());

// routes import
import  userRoute  from "./routes/user.route.js";

// routes declare
app.use("/api/v1/users", userRoute);

export { app };
