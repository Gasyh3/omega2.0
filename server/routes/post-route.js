const express = require("express");
const postController = require("../controllers/post-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", authMiddleware, postController.createPost);
router.put("/:id", authMiddleware, postController.updatePost);
router.delete("/:id", authMiddleware, postController.deletePost);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.get("/title/:postTitle", postController.getPostByTitle);

module.exports = router;