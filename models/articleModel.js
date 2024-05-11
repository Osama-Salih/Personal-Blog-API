const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required"],
      maxLength: [100, "Too long article title"],
      minLength: [3, "Too short article title"],
    },

    slug: {
      type: String,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, "Content required"],
      maxLength: [5000, "Too long article title"],
    },
    author: {
      type: String,
      required: [true, "The article should have an author"],
      trim: true,
    },
    datePublished: Date,
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
