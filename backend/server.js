const express = require("express");
require("dotenv").config();
const router = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleWare");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
