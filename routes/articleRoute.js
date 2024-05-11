const express = require("express");

const {
  getArticleValidator,
  createArticleValidator,
  updateArticleValidator,
  deleteArticleValidator,
} = require("../utils/validators/articleValidator");

const {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../services/articleServices");

const router = express.Router();

router
  .route("/")
  .get(getAllArticles)
  .post(createArticleValidator, createArticle);
router
  .route("/:id")
  .get(getArticleValidator, getArticle)
  .put(updateArticleValidator, updateArticle)
  .delete(deleteArticleValidator, deleteArticle);

module.exports = router;
