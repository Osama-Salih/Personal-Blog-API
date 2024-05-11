const { check } = require("express-validator");
const validationMiddleware = require("../../middlewares/validatorMiddleware");

exports.getArticleValidator = [
  check("id").isMongoId().withMessage("Invalid id format"),
  validationMiddleware,
];

exports.createArticleValidator = [
  check("title")
    .notEmpty()
    .withMessage("Title field required")
    .isLength({ max: 100 })
    .withMessage("Too long article title")
    .isLength({ min: 3 })
    .withMessage("Too short article title"),

  check("content").notEmpty().withMessage("Content field required"),

  check("author").notEmpty().withMessage("Author field required"),
  validationMiddleware,
];

exports.updateArticleValidator = [
  check("id").isMongoId().withMessage("Invalid id format"),
  validationMiddleware,
];

exports.deleteArticleValidator = [
  check("id").isMongoId().withMessage("Invalid id format"),
  validationMiddleware,
];
