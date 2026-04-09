import express from "express";
import cors from "cors";

const app = express();

//basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
