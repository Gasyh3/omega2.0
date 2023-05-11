const express = require("express");
const portfolioController = require("../controllers/portfolio-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", authMiddleware, portfolioController.createPortfolio);
router.put("/:id", authMiddleware, portfolioController.updatePortfolio);
router.delete("/:id", authMiddleware, portfolioController.deletePortfolio);
router.get("/", authMiddleware, portfolioController.getAllPortfolios);

module.exports = router;
