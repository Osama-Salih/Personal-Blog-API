const asynchandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const Article = require("../models/articleModel");

// @desc  Get all articles
// @route GET /api/v1/articles
exports.getAllArticles = asynchandler(async (req, res) => {
  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 50;
  const skip = (page - 1) * limit;
  const articles = await Article.find({}).skip(skip).limit(limit);

  res.status(200).json({
    status: "success",
    results: articles.length,
    page,
    data: articles,
  });
});

// @desc  Get a specific article by id
// @route GET /api/v1/articles/:id
exports.getArticle = asynchandler(async (req, res, next) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    return next(new ApiError("There is no article yet", 404));
  }

  res.status(200).json({
    status: "success",
    data: article,
  });
});

// @desc  Create a new article
// @route POST /api/v1/articles
exports.createArticle = asynchandler(async (req, res) => {
  const article = await Article.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    datePublished: Date.now(),
  });

  res.status(201).json({
    status: "success",
    data: article,
  });
});

// @desc  Update a specific article by id
// @route PUT /api/v1/articles/:id
exports.updateArticle = asynchandler(async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!article) {
    return next(new ApiError("There is no article yet", 404));
  }

  res.status(200).json({
    status: "success",
    data: article,
  });
});

// @desc  Delete a specific article by id
// @route DELETE /api/v1/articles/:id
exports.deleteArticle = asynchandler(async (req, res) => {
  const article = await Article.findByIdAndDelete(req.params.id);

  if (!article) {
    return next(new ApiError("There is no article yet", 404));
  }

  res.status(204).send();
});
