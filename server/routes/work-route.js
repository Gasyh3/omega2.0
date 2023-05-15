const express = require("express");
const workController = require("../controllers/work-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", authMiddleware, workController.createWork);
router.put("/:id", authMiddleware, workController.updateWork);
router.delete("/:id", authMiddleware, workController.deleteWork);
router.get("/", workController.getAllWorks);
router.get("/:id", workController.getWorkById);
router.get("/category/:categoryId/works", workController.getWorksByCategory);

module.exports = router;
