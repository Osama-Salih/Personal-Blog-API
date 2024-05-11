const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const articleRouter = require("./routes/articleRoute");
const dbConnection = require("./config/database");
const ApiError = require("./utils/ApiError");
const globalErrorHandler = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config({ path: "config.env" });

app.use(express.json());
app.use(morgan("dev"));

// Database connection
dbConnection();

app.use("/api/v1/articles", articleRouter);

app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route ${req.originalUrl}`, 400));
});

// Global error handler middleware
app.use(globalErrorHandler);

const port = 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
